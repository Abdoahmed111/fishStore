import React, { useState } from "react";
import { Nav } from "../../../components";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import axios from "axios";
import { useHistory } from "react-router";

export default function ProfileMenu() {
  const [menu, setMenu] = useState(null);
  const history = useHistory();
  const user = JSON.parse(window.localStorage.getItem("user"));

  const openMenu = (event) => {
    setMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setMenu(null);
  };

  const logOut = () => {
    const user_token = user.token;
    axios
      .get("/logout", {
        headers: {
          Authorization: `Bearer ${user_token}`,
        },
      })
      .then((res) => {
        console.log(res);
        window.localStorage.removeItem("user");
        history.push({
          pathname: "/",
        });
      })
      .catch((error) => console.log(error));
    setMenu(null);
  };
  return (
    <>
      <Nav.IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMenu}
      >
        <PersonOutlineOutlinedIcon />
      </Nav.IconButton>
      <Nav.ToggleMenu
        anchorEl={menu}
        keepMounted
        open={Boolean(menu)}
        onClose={closeMenu}
      >
        <Nav.ToggleItem>Edit Profile</Nav.ToggleItem>
        <Nav.ToggleItem onClick={logOut}>Log Out</Nav.ToggleItem>
      </Nav.ToggleMenu>
    </>
  );
}
