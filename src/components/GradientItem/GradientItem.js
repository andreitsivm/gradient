import React from "react";
import propTypes from "prop-types";
import classes from "./Gradient.module.css";

const GradientItem = ({ firstColor, secondColor, removeGradient, id }) => {
  const inlineStyles = {
    background: `linear-gradient(${firstColor},${secondColor})`,
  };
  return (
    <div className={classes.gradientContainer}>
      <div className={classes.hexCode}>{firstColor}</div>
      <div className={classes.gradient} style={inlineStyles}></div>
      <div className={classes.hexCode}>{secondColor}</div>
      <div className={classes.closeBtn}>
        <button onClick={() => removeGradient(id)}>X</button>
      </div>
    </div>
  );
};
GradientItem.propTypes = {
  firstColor: propTypes.string.isRequired,
  secondColor: propTypes.string.isRequired,
  id: propTypes.number.isRequired,
  removeGradient: propTypes.func.isRequired,
};

export default GradientItem;
