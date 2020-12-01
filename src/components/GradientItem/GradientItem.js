import React from "react";
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

export default GradientItem;
