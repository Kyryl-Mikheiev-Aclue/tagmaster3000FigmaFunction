/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

interface Props {
  color: string;
  opacity: string;
  className: any;
}

export const Addfilled7 = ({ color = "white", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`addfilled-7 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path className="path" d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill={color} fillOpacity={opacity} />
    </svg>
  );
};

Addfilled7.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
