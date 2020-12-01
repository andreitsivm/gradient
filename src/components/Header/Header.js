import React from "react";
import Container from "../Container/Container";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <h1>Gradient creator</h1>
      </Container>
    </header>
  );
};

export default Header;
