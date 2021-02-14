import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router";
import { Form } from "../components";

export default function SignIn() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    phone_number: "",
    password: "",
    device_type: "web",
  });

  const handleChange = (event) => {
    const value = event.target.value;
    setLoginData({
      ...loginData,
      [event.target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const device_token = JSON.parse(
      window.localStorage.getItem("device_token")
    );

    loginData["device_token"] = device_token;

    axios
      .post("/login", loginData)
      .then((res) => {
        window.localStorage.setItem("user", JSON.stringify(res.data.data));
        history.push({
          pathname: "/",
        });
      })
      .catch((err) => console.log(err.message));

    console.log(JSON.parse(window.localStorage.getItem("user")));
  };
  return (
    <Form elevation={6} onSubmit={handleSubmit}>
      <Form.Title component="h1" variant="h5">
        Sign in
      </Form.Title>
      <Form.Logo to="/" src="/assets/logoName.png" />
      <Form.Group>
        <Form.Row container spacing={2}>
          <Form.Row item xs={12}>
            <Form.Input
              type="number"
              name="phone_number"
              variant="outlined"
              required
              fullWidth
              id="phone_number"
              label="Mobile Number"
              autoFocus
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Row item xs={12}>
            <Form.Input
              type="password"
              name="password"
              variant="outlined"
              required
              fullWidth
              id="password"
              label="Password"
              autoFocus
              onChange={handleChange}
            />
          </Form.Row>
          <Form.Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </Form.Button>
          <Form.Row container justify="flex-end">
            <Form.Row item>
              <Form.Link variant="body2" to="/signup">
                Don't have an account? <span>Sign up</span>
              </Form.Link>
            </Form.Row>
          </Form.Row>
        </Form.Row>
      </Form.Group>
    </Form>
  );
}
