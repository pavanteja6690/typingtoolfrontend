import React from "react";
import { useState } from "react";
import { Form, FormControl, FormGroup, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
function Signup() {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const signuphandler = async (e) => {
    console.log("entered");
    e.preventDefault();
    await axios
      .post("http://localhost:5000/users/signup", {
        username: username,
        email: email,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("typingtool-token", res.data.token);
        dispatch({ type: "SET_USER", payload: res.data.user });
        dispatch({ type: "setdetails", payload: res.data.user });
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        console.log("abcd");
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
          Sign up
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
          <Form onSubmit={signuphandler}>
            <FormGroup>
              <label className="m-2">Username</label>
              <FormControl
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <label className="m-2">Email</label>
              <FormControl
                value={email}
                onChange={(e) => setemail(e.target.value)}
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
                signup
              </button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
