import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dialog, Form } from "../components";
import firebase from "../firebase.js";
import { setCurrentUser } from "../redux/user/userAction";

export default function SignUp() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    firstname: "",
    lastname: "",
    phone_number: "",
    email: "",
    password: "",
    password_confirmation: "",
    device_type: "web",
    device_token: null,
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setRegistrationData({
      ...registrationData,
      [event.target.name]: value,
    });
  };

  const handleAgree = (event) => {
    event.preventDefault();
    const messaging = firebase.messaging();
    Notification.requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) =>
        setRegistrationData({
          ...registrationData,
          device_token: token,
        })
      )
      .then(() => {
        axios
          .post("/register", registrationData)
          .then((res) => dispatch(setCurrentUser(res.data)))
          .catch((err) => console.log(err.message));
      });

    setOpen(false);
    console.log(registrationData);
    // send Data to the server
  };

  return (
    <>
      {open ? (
        <Dialog
          open={open}
          handleClose={handleClose}
          handleAgree={handleAgree}
        />
      ) : (
        <Form elevation={6} onSubmit={() => setOpen(true)}>
          <Form.Title component="h1" variant="h5">
            Sign up
          </Form.Title>
          <Form.Logo to="/" src="/assets/logoName.png" />
          <Form.Group>
            <Form.Row container spacing={2}>
              <Form.Row item xs={12} sm={6}>
                <Form.Input
                  type="text"
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Form.Row>
              <Form.Row item xs={12} sm={6}>
                <Form.Input
                  type="text"
                  autoComplete="lname"
                  name="lastname"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  autoFocus
                />
              </Form.Row>
              <Form.Row item xs={12}>
                <Form.Input
                  type="number"
                  name="phone_number"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="mobileNumber"
                  label="Mobile Number"
                  autoFocus
                />
              </Form.Row>
              <Form.Row item xs={12}>
                <Form.Input
                  type="email"
                  name="email"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="email"
                  label="Email Address"
                  autoFocus
                />
              </Form.Row>
              <Form.Row item xs={12}>
                <Form.Input
                  type="password"
                  name="password"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="password"
                  label="Password"
                  autoFocus
                />
              </Form.Row>
              <Form.Row item xs={12}>
                <Form.Input
                  type="password"
                  name="password_confirmation"
                  variant="outlined"
                  required
                  onChange={handleChange}
                  fullWidth
                  id="confirmPassowrd"
                  label="Confirm Password"
                  autoFocus
                />
              </Form.Row>
              <Form.Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Sign Up
              </Form.Button>
              <Form.Row container justify="flex-end">
                <Form.Row item>
                  <Form.Link variant="body2" to="/signin">
                    Already have an account? <span>Sign in</span>
                  </Form.Link>
                </Form.Row>
              </Form.Row>
            </Form.Row>
          </Form.Group>
        </Form>
      )}
    </>
  );
}
