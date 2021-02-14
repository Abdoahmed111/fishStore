import React from "react";
import { useHistory } from "react-router";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Nav } from "../components";
import { Divider } from "@material-ui/core";
import NavbarMenu from "../components/navbar/navbarMenu";
import { useSelector } from "react-redux";
import { getCategories } from "../redux/categories/reducers/categoriesReducer";
import ProfileMenu from "../components/navbar/personMenu";

export default function NavbarContainer() {
  const categories = useSelector(getCategories);
  const user = JSON.parse(window.localStorage.getItem("user"));

  const history = useHistory();
  const handleClickCategory = (id, name) => {
    history.push({
      pathname: "/category",
      categoryName: `${name}`,
      hash: `${name}`,
      search: `?cat_id=${id}`,
    });
  };
  return (
    <Nav>
      <Nav.TopNav>
        <Nav.FlexDiv>
          <p>+20-111-9880-600</p>
          <p>eslamyassen@fishstore.com</p>
        </Nav.FlexDiv>
        <Nav.FlexDiv>
          <p>Contact Us</p>
          <p>About Us</p>
        </Nav.FlexDiv>
      </Nav.TopNav>

      <Divider />

      <Nav.MainNavbar>
        <Nav.FlexDiv>
          <NavbarMenu />
          <Nav.LogoContainer>
            <Nav.Logo src="/assets/logo_white.png" alt="logo" />
            <Nav.LogoName src="/assets/logo_name.png" alt="logo" />
          </Nav.LogoContainer>
        </Nav.FlexDiv>
        <Nav.FlexDiv>
          <Nav.SearchInput main="true" placeholder="Search Products" />
        </Nav.FlexDiv>
        <Nav.FlexDiv>
          {user ? (
            <ProfileMenu />
          ) : (
            <div>
              <Nav.Button onClick={() => history.push({ pathname: "/signin" })}>
                Login
              </Nav.Button>
              <Nav.Button onClick={() => history.push({ pathname: "/signup" })}>
                Sign UP
              </Nav.Button>
            </div>
          )}
          <Nav.IconButton edge="start" color="inherit">
            <NotificationsNoneOutlinedIcon />
          </Nav.IconButton>
          <Nav.IconButton edge="start" color="inherit">
            <ShoppingCartOutlinedIcon />
          </Nav.IconButton>
        </Nav.FlexDiv>
      </Nav.MainNavbar>

      <Divider />

      <Nav.BottomNav>
        {categories.map((category) => (
          <Nav.Button
            onClick={() => handleClickCategory(category.id, category.name)}
            key={category.id}
          >
            {category.name}
          </Nav.Button>
        ))}
      </Nav.BottomNav>
    </Nav>
  );
}
