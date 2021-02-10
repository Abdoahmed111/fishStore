import React from "react";
import {
  Frame,
  Box,
  Title,
  Item,
  Card,
  Image,
  Content,
  ActionArea,
  Action,
  Header,
  Price,
  OriginalPrice,
  OfferPrice,
  Rating,
  IconButton,
  Button,
} from "./styles/gird";

export default function Grid({ children, ...restProps }) {
  return (
    <Frame maxWidth="lg">
      <Box container spacing={3} {...restProps}>
        {children}
      </Box>
    </Frame>
  );
}

Grid.Title = function GridTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Grid.Item = function GridItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Grid.Card = function GridCard({ children, ...restProps }) {
  return <Card {...restProps}>{children}</Card>;
};

Grid.Image = function GridImage({ image, alt, ...restProps }) {
  return <Image image={image} title={alt} {...restProps}></Image>;
};

Grid.Content = function GridContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Grid.ActionArea = function GridActionArea({ children, ...restProps }) {
  return <ActionArea {...restProps}>{children}</ActionArea>;
};

Grid.Action = function GridAction({ children, ...restProps }) {
  return <Action {...restProps}>{children}</Action>;
};

Grid.Header = function GridHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Grid.Button = function GridButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Grid.Price = function GridPrice({ children, ...restProps }) {
  return <Price {...restProps}>{children}</Price>;
};

Grid.OriginalPrice = function GridOriginalPrice({ children, ...restProps }) {
  return <OriginalPrice {...restProps}>{children}</OriginalPrice>;
};

Grid.OfferPrice = function GridOfferPrice({ children, ...restProps }) {
  return <OfferPrice {...restProps}>{children}</OfferPrice>;
};

Grid.Rating = function GridRating({ children, ...restProps }) {
  return <Rating {...restProps}>{children}</Rating>;
};

Grid.IconButton = function GridIconButton({ children, ...restProps }) {
  return <IconButton {...restProps}>{children}</IconButton>;
};
