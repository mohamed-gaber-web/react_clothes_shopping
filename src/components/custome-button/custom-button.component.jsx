import React from "react";

import "./custom-button.styles.scss";

const CustomButton = ({ children, isGoogleBtn, ...otherProps }) => (
  <button {...otherProps} isGoogleBtn>
    {children}
  </button>
);

export default CustomButton;
