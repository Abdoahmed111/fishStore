import {
  Container as MaterialContainer,
  Grid,
  Paper,
  Typography,
  Button as MaterialButton,
} from "@material-ui/core";
import styled from "styled-components/macro";

export const Container = styled(MaterialContainer)``;

export const Frame = styled(Grid)`
  margin: 20px 0;
`;

export const ImageContainer = styled.div`
  width: auto;
  img {
    object-fit: contain;
  }
`;

export const Flex = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-end;

  p {
    margin-left: 10px;
    padding-bottom: 3px;
  }
`;

export const Row = styled(Grid)``;

export const Details = styled(Paper)`
  width: 85%;
  padding: 20px;
  margin-bottom: 30px;

  @media (max-width: 1000px) {
    width: 95%;
  }
`;

export const Name = styled(Typography)`
  text-align: center;
  font-weight: 600;
`;

export const Content = styled.div`
  div {
    display: flex;
    justify-content: start;
    align-items: center;

    p {
      margin-left: 10px;
    }
  }
`;

export const Text = styled(Typography)`
  font-weight: bold;
`;

export const Header = styled(Typography)`
  font-weight: bold;
`;

export const Button = styled(MaterialButton)`
  background-color: #119807;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  margin: 30px 0;

  &:hover {
    background-color: #216c0a;
  }
`;
