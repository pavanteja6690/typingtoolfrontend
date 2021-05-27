import React from "react";
import { useState } from "react";
import axios from "axios";
import { Form, FormControl, FormGroup, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  const loginhandler = async (e) => {
    console.log("entered");
    e.preventDefault();
    await axios
      .post("http://localhost:5000/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("typing-tool-token", res.data.token);
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ background: "black", height: "100vh", width: "100vw" }}>
      <Row>
        <h1
          style={{ textAlign: "center", marginTop: "20px", color: "white" }}
          className="col-12"
        >
          login
        </h1>
      </Row>
      <Row
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Col
          xs={10}
          sm={8}
          md={5}
          style={{ background: "grey", padding: "20px", borderRadius: "10px" }}
        >
          <Form onSubmit={loginhandler}>
            <FormGroup>
              <label className="m-2">Username</label>
              <FormControl
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label className="m-2">Password</label>
              <FormControl
                value={password}
                onChange={(e) => setpassword(e.target.value)}
              />
            </FormGroup>
            <div className="text-center">
              <button className="m-5 rounded btn btn-primary" type="submit">
                login
              </button>
            </div>
            <Link to="/signup">
              <p style={{ textAlign: "center", color: "black" }}>
                new user?? please signup
              </p>
            </Link>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
