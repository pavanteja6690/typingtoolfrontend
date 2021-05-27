import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
function Header() {
  var username;
  var user = useSelector((state) => state.userdetails);
  if (user.loggedin) username = user.user.username;
  return (
    <div style={{}} className="logo">
      <img
        style={{
          position: "absolute",
          left: "0px",
          top: "0px",
          height: "120px",
          marginTop: "0",
        }}
        alt="logo"
        src="/images/typingtoollogo2.png"
      />
      <div style={{ position: "absolute", top: "20px", right: "20px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={user.loggedin ? "d-block" : "d-none"}
        >
          <h1 className="headeroptions d-inline">
            Hello
            <span> {username}</span>
          </h1>

          <h1 className="headeroptions d-inline">Statistics</h1>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className={user.loggedin ? "d-none" : "d-block"}
        >
          <h1 className="headeroptions d-inline">Hello guest</h1>
          <Link to="/login">
            <h1 className="headeroptions d-inline">Sign in</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
