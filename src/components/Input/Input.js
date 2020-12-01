import React from "react";
import classes from "./Input.module.css";

const Input = ({ inputRef, name, onChange, value, errors, label }) => {
  return (
    <div className={`${classes.formControl} ${errors && classes.error}`}>
      <label className={`${errors && classes.formError}`}>
        {label}
        <input
          ref={inputRef}
          type="text"
          name={name}
          onChange={onChange}
          value={value}
        />
      </label>
      <span className={classes.formError}>{errors && errors.message}</span>
    </div>
  );
};

export default Input;
