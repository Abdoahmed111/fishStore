import styled from "styled-components/macro";
import Container from "@material-ui/core/Container";
import { Card as Materialcard } from "@material-ui/core";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardAction from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Button as MaterialButton } from "@material-ui/core";
import { IconButton as ButtonContainer } from "@material-ui/core";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

export const Frame = styled(Container)``;

export const Box = styled(Grid)`
  margin-right: auto;
  margin-left: auto;
`;

export const Title = styled(Typography)`
  text-transform: uppercase;
  font-weight: 600;
`;

export const Item = styled(Grid)`
  width: auto;
  margin: 15px 0;
`;

export const Card = styled(Materialcard)`
  max-width: 250px;
  max-height: auto;
  border-radius: 15px;
  margin-right: 20px;

  h3 {
    font-weight: 600;
    text-align: center;
  }

  @media (max-width: 960px) {
    display: ${({ productpage }) => productpage && "none"};
  }

  @media (max-width: 1100px) {
    max-width: 100%;
  }
`;

export const Image = styled(CardMedia)`
  height: 200px;
  object-fit: cover;

  &:hover {
    opacity: 0.6;
  }
`;

export const Content = styled(CardContent)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ActionArea = styled(CardActionArea)``;

export const Action = styled(CardAction)``;

export const Button = styled(MaterialButton)`
  width: 100%;
  text-align: center;
`;

export const Header = styled(Typography)`
  font-weight: 600;
`;

export const OriginalPrice = styled(Typography)`
  margin-left: 10px;
  text-decoration: line-through;
`;

export const OfferPrice = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  color: #256b99;
`;

export const Price = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const Rating = styled.div`
  display: flex;
`;

export const IconButton = styled(ButtonContainer)`
  &:hover {
    color: red;
  }
`;
