import React from "react";
import {
  Container,
  Frame,
  Title,
  Logo,
  Row,
  Group,
  Link,
  Button,
  Input,
} from "./styles/form";
import { Link as ReactRouterLink } from "react-router-dom";

export default function Form({ children, ...restProps }) {
  return (
    <Container component="main" maxWidth="xs">
      <Frame {...restProps}>{children}</Frame>
    </Container>
  );
}

Form.Title = function FormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Form.Logo = function FormLogo({ src, alt, to }) {
  return (
    <ReactRouterLink to={to}>
      <Logo src={src} alt={alt} />
    </ReactRouterLink>
  );
};

Form.Group = function FormGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>;
};

Form.Row = function FormRow({ children, ...restProps }) {
  return <Row {...restProps}>{children}</Row>;
};

Form.Input = function FormInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Form.Button = function FormButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Form.Link = function FormLink({ children, to, ...restProps }) {
  return (
    <Link {...restProps} to={to}>
      {children}
    </Link>
  );
};
