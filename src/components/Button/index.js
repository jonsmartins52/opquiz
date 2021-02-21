import React from "react";
import { ButtonBase } from "./style";

export default function Button({ children, type, ...rest }) {
  return (
    <ButtonBase type={type} {...rest}>
      {children}
    </ButtonBase>
  );
}
