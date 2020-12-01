import React from "react";
import classes from "./Button.module.css";
import propTypes from "prop-types";

const Button = ({ children, onClick, disabled }) => {
  return (
    <button className={classes.btn} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
Button.propTypes = {
  children: propTypes.node,
  onClick: propTypes.func,
  disabled: propTypes.bool,
};
Button.defaultProps = {
  children: "Default button",
  onClick: () => {},
  className: "",
  disabled: false,
  active: false,
};
export default Button;
