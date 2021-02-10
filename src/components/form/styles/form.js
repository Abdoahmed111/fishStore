import {
  Container as MaterialContainer,
  Grid,
  Paper,
  TextField,
  Typography,
  Button as MaterialButton,
} from "@material-ui/core";
import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled(MaterialContainer)``;

export const Frame = styled(Paper)`
  margin: 100px 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled(Typography)`
  font-weight: 600;
`;

export const Group = styled.form`
  width: 100%;
  margin-top: 20px;
`;

export const Logo = styled.img`
  margin: 20px;
`;

export const Row = styled(Grid)``;

export const Input = styled(TextField)``;

export const Button = styled(MaterialButton)`
  background-color: green;
  margin: 20px 10px;
  color: #fff;
  font-weight: bold;

  &:hover {
    background-color: green;
    box-shadow: none;
    opacity: 0.7;
  }
`;

export const Link = styled(ReactRouterLink)`
  text-decoration: none;
  margin: 0px 10px;
  color: gray;

  span {
    font-size: 17px;
    font-weight: 600;
    color: #00558e;

    &:hover {
      cursor: pointer;
    }
  }

  &:hover {
    cursor: default;
    text-decoration: none;
  }
`;
