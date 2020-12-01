import React from "react";
import classes from "./Container.module.css";
import propTypes from "prop-types";

const Container = ({ children }) => {
  return <div className={classes.container}>{children}</div>;
};

export default Container;
