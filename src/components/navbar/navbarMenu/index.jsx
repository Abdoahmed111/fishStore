import React, { useState } from "react";
import { Nav } from "../../../components";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import { useSelector } from "react-redux";
import { getCategories } from "../../../redux/categories/reducers/categoriesReducer";
import { Container } from "./styles/navbarMenu";

export default function NavbarMenu() {
  const categories = useSelector(getCategories);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mobileMenu, setMobileMenu] = useState(null);

  const openMobileMenu = (event) => {
    setMobileMenu(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenu(null);
  };
  return (
    <Container>
      <Nav.IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={openMobileMenu}
      >
        <MenuOutlinedIcon />
      </Nav.IconButton>
      <Nav.ToggleMenu
        anchorEl={mobileMenu}
        keepMounted
        open={Boolean(mobileMenu)}
        onClose={closeMobileMenu}
      >
        <Nav.SearchInput placeholder="Search Products" className="searchMenu" />
        <Nav.MenuHeader>Categories:</Nav.MenuHeader>
        {categories.map((category) => (
          <Nav.ToggleItem key={category.id} onClick={closeMobileMenu}>
            {category.name}
          </Nav.ToggleItem>
        ))}
      </Nav.ToggleMenu>
    </Container>
  );
}
