import React from "react";
import propTypes from "prop-types";
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
Input.propTypes = {
  name: propTypes.string,
  label: propTypes.string,
  onChange: propTypes.func,
  value: propTypes.string,
  inputRef: propTypes.func,
  errors: propTypes.object,
};
export default Input;
