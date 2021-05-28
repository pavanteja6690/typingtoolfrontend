import React from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
function Header() {
  var username;
  var user = useSelector((state) => state.userdetails);
  if (user.loggedin) username = user.user.username;
  const dispatch = useDispatch();
  const history = useHistory();
  const logouthandler = () => {
    localStorage.setItem("typingtool-token", "");
    dispatch({ type: "logout", payload: [] });
    dispatch({ type: "emptymatches", payload: [] });
    history.push("/");
  };
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
          <h1 className="headeroptions dropdowntrigger d-inline">
            Hello
            <span> {username}</span>
          </h1>

          <Link to="/statistics">
            <h1 className="headeroptions d-inline">Statistics</h1>
          </Link>
          <h2 className="headeroptions d-inline" onClick={logouthandler}>
            Logout
          </h2>
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
