import React from "react";
import { Footer } from "../components";

export default function FooterContainer() {
  return (
    <Footer>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Logo to="/" src="/assets/logo_white_name.png" />
        </Footer.Column>

        <Footer.Column>
          <Footer.Link to="/">Help Center</Footer.Link>
          <Footer.Link to="/">Jobs</Footer.Link>
          <Footer.Link to="/">Terms of Use</Footer.Link>
          <Footer.Link to="/">Contact Us</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link to="/">Accounts</Footer.Link>
          <Footer.Link to="/">Redeem Gift</Footer.Link>
          <Footer.Link to="/">Privacy</Footer.Link>
          <Footer.Link to="/">Speed Text</Footer.Link>
        </Footer.Column>

        <Footer.Column>
          <Footer.Link to="/">Media Center</Footer.Link>
          <Footer.Link to="/">Buy Gift Cards</Footer.Link>
          <Footer.Link to="/">Cookie Preferences</Footer.Link>
          <Footer.Link to="/">Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
    </Footer>
  );
}
