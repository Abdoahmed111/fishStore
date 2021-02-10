import React from "react";
import { Form } from "../components";

export default function SignIn() {
  return (
    <Form elevation={6}>
      <Form.Title component="h1" variant="h5">
        Sign in
      </Form.Title>
      <Form.Logo to="/" src="/assets/logoName.png" />
      <Form.Group>
        <Form.Row container spacing={2}>
          <Form.Row item xs={12}>
            <Form.Input
              type="number"
              name="mobileNumber"
              variant="outlined"
              required
              fullWidth
              id="mobileNumber"
              label="Mobile Number"
              autoFocus
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
