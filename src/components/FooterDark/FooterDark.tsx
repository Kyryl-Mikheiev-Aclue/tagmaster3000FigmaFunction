/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  text: string;
  width: "full" | "inset";
  className: any;
  hasFooterText: boolean;
}

export const FooterDark = ({ text = "Footer text", width, className, hasFooterText = true }: Props): JSX.Element => {
  return (
    <div className={`footer-dark ${width} ${className}`}>
      <div className="group">
        <div className="footer-text-wrapper">{hasFooterText && <div className="footer-text">{text}</div>}</div>
      </div>
    </div>
  );
};

FooterDark.propTypes = {
  text: PropTypes.string,
  width: PropTypes.oneOf(["full", "inset"]),
  hasFooterText: PropTypes.bool,
};
