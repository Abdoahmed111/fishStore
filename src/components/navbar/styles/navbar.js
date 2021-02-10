import styled from "styled-components/macro";
import { Toolbar, Menu, MenuItem, Typography } from "@material-ui/core";
import { IconButton as ButtonContainer } from "@material-ui/core";
import { Button as MaterialButton } from "@material-ui/core";
import SearchBar from "material-ui-search-bar";

export const MainNavbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Topbar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: auto;
`;

export const IconButton = styled(ButtonContainer)``;

export const Button = styled(MaterialButton)`
  color: white;
  font-weight: 600;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const TopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 600px) {
    justify-content: center;

    div {
      justify-content: center;
    }
  }
`;

export const BottomNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin: 10px;

    &:hover {
      text-decoration: underline;
      cursor: pointer;
    }
  }

  @media (max-width: 650px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;

  @media (max-width: 400px) {
    width: 30px;
    height: 30px;
  }
`;

export const LogoName = styled.img`
  width: 135px;
  height: 28px;
  margin-left: 10px;

  @media (max-width: 400px) {
    width: 100px;
    height: 20px;
    margin-left: 5px;
  }
`;

export const SearchInput = styled(SearchBar)`
  border-radius: 15px;
  width: 30vw;
  height: 40px;

  button {
    color: #3f51b5;
  }

  @media (max-width: 650px) {
    display: ${(props) => props.main && "none"};
  }
`;

export const ToggleMenu = styled(Menu)`
  overflow: hidden;
  .searchMenu {
    width: 200px;
    margin: 10px;
  }
`;

export const ToggleItem = styled(MenuItem)``;

export const MenuHeader = styled(Typography)`
  margin: 5px;
  margin-left: 10px;
  font-weight: 600;
`;
