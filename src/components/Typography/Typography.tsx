/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  content: string;
  variant:
    | "h-5"
    | "caption"
    | "subtitle-1"
    | "custom"
    | "overline"
    | "h-1"
    | "h-6"
    | "h-2"
    | "subtitle-2"
    | "body-1"
    | "h-4"
    | "h-3"
    | "body-2";
  gutterBottom: boolean;
  className: any;
  bodyClassName: any;
}

export const Typography = ({
  content = "Typography",
  variant,
  gutterBottom,
  className,
  bodyClassName,
}: Props): JSX.Element => {
  return (
    <div className={`typography ${variant} gutter-bottom-${gutterBottom} ${className}`}>
      <div className={`body ${bodyClassName}`}>{content}</div>
    </div>
  );
};

Typography.propTypes = {
  content: PropTypes.string,
  variant: PropTypes.oneOf([
    "h-5",
    "caption",
    "subtitle-1",
    "custom",
    "overline",
    "h-1",
    "h-6",
    "h-2",
    "subtitle-2",
    "body-1",
    "h-4",
    "h-3",
    "body-2",
  ]),
  gutterBottom: PropTypes.bool,
};
