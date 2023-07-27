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

export const Viewheadlinefilled7 = ({ color = "white", opacity = "unset", className }: Props): JSX.Element => {
  return (
    <svg
      className={`viewheadlinefilled-7 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M4 15H20V13H4V15ZM4 19H20V17H4V19ZM4 11H20V9H4V11ZM4 5V7H20V5H4Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Viewheadlinefilled7.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
