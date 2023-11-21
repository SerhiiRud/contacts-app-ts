import React from "react";
import PropTypes from "prop-types";
import { Container, MainBlock } from "./Layout.styled";

type TProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<TProps> = ({ children }) => {
  return (
    <Container>
      <MainBlock>{children}</MainBlock>
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.any.isRequired,
};
