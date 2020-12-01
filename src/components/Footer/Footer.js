import React from "react";
import Container from "../Container/Container";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <span className="center"> &copy; Gradient creator</span>
      </Container>
    </footer>
  );
};

export default Footer;
