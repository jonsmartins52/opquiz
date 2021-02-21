import React from "react";
import PropTypes from "prop-types";
import { InputBase } from "./style";

export default function Input({ name, value, ...rest }) {
  return (
    <div>
      <InputBase name={name} value={value} {...rest} />
    </div>
  );
}

Input.defaultProps = {
  value: "",
};

Input.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
};
