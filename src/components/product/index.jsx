import React from "react";
import {
  Container,
  Frame,
  ImageContainer,
  Row,
  Name,
  Details,
  Content,
  Text,
  Header,
  Flex,
  Button,
} from "./styles/product";

export default function Product({ children, ...restProps }) {
  return (
    <Container maxWidth="lg">
      <Frame container {...restProps}>
        {children}
      </Frame>
    </Container>
  );
}

Product.ImageContainer = function ProductImageContainer({
  children,
  ...restProps
}) {
  return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Product.Row = function ProductRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Product.Name = function ProductName({ children, ...restProps }) {
  return <Name {...restProps}>{children}</Name>;
};

Product.Details = function ProductDetails({ children, ...restProps }) {
  return <Details {...restProps}>{children}</Details>;
};

Product.Content = function ProductContent({ children, ...restProps }) {
  return <Content {...restProps}>{children}</Content>;
};

Product.Text = function ProductText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Product.Header = function ProductHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Product.Button = function ProductButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Product.Flex = function ProductFlex({ children, ...restProps }) {
  return <Flex {...restProps}>{children}</Flex>;
};
