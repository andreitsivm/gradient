import React from "react";
import Container from "../Container/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <h3> &copy;Gradient creator</h3>
      </Container>
    </footer>
  );
};

export default Footer;
