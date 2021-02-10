import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import {
  FlexDiv,
  TopNav,
  BottomNav,
  LogoContainer,
  Logo,
  LogoName,
  MainNavbar,
  Topbar,
  IconButton,
  Button,
  SearchInput,
  ToggleMenu,
  MenuHeader,
  ToggleItem,
} from "./styles/navbar";

export default function Nav({ children }) {
  return (
    <AppBar position="sticky" color="primary">
      <Container maxWidth="lg">{children}</Container>
    </AppBar>
  );
}

// Div
Nav.FlexDiv = function NavFlexDiv({ children }) {
  return <FlexDiv>{children}</FlexDiv>;
};

// Div
Nav.TopNav = function NavTopNav({ children }) {
  return <TopNav>{children}</TopNav>;
};

// Div
Nav.BottomNav = function NavBottomNav({ children }) {
  return <BottomNav>{children}</BottomNav>;
};

// Toolbar
Nav.MainNavbar = function NavMainNavbar({ children, ...restProps }) {
  return <MainNavbar {...restProps}>{children}</MainNavbar>;
};

// Toolbar
Nav.Topbar = function NavTopbar({ children, ...restProps }) {
  return <Topbar {...restProps}>{children}</Topbar>;
};

// IconButton
Nav.IconButton = function NavIconButton({ children, ...restProps }) {
  return <IconButton {...restProps}>{children}</IconButton>;
};

// Button
Nav.Button = function NavButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

//       value={this.state.value}
//       onChange={(newValue) => this.setState({ value: newValue })}
//   onRequestSearch={() => doSomethingWith(this.state.value)}

// SearchInput
Nav.SearchInput = function NavSearchInput({ children, ...restProps }) {
  return <SearchInput {...restProps}>{children}</SearchInput>;
};

// Material UI Menu
Nav.ToggleMenu = function NavToggleMenu({ children, ...restProps }) {
  return <ToggleMenu {...restProps}>{children}</ToggleMenu>;
};

// Material Ui MenuItem
Nav.ToggleItem = function NavToggleItem({ children, ...restProps }) {
  return <ToggleItem {...restProps}>{children}</ToggleItem>;
};

// Typgraphy(h6)
Nav.MenuHeader = function NavMenuHeader({ children }) {
  return <MenuHeader>{children}</MenuHeader>;
};

Nav.LogoContainer = function NavLogoContainer({ children }) {
  return <LogoContainer>{children}</LogoContainer>;
};

Nav.Logo = function NavLogo({ src, alt }) {
  return <Logo src={src} alt={alt} />;
};

Nav.LogoName = function NavLogoName({ src, alt }) {
  return <LogoName src={src} alt={alt} />;
};
