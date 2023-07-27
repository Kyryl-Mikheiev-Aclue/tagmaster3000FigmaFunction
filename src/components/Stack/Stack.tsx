/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { LibraryInstance } from "../LibraryInstance";
import "./style.css";

interface Props {
  instances: "two" | "three" | "four" | "one" | "five";
  direction: "row" | "column";
  spacing: "seven" | "zero" | "two" | "three" | "four" | "one" | "five" | "eight" | "six";
  className: any;
  visible: boolean;
}

export const Stack = ({ instances, direction, spacing, className, visible = true }: Props): JSX.Element => {
  return (
    <div className={`stack ${direction} ${spacing} ${instances} ${className}`}>
      {["five", "four", "three", "two"].includes(instances) && (
        <LibraryInstance className={`${direction === "column" ? "class" : "class-2"}`} />
      )}

      {["five", "four", "three", "two"].includes(instances) && (
        <LibraryInstance
          className={`${
            instances === "two" && direction === "row"
              ? "class-3"
              : direction === "column" && instances === "two"
              ? "class-4"
              : direction === "column" && ["five", "four", "three"].includes(instances)
              ? "class-5"
              : "class-6"
          }`}
        />
      )}

      {instances === "one" && (
        <>
          <>{visible && <LibraryInstance className="instance" />}</>
        </>
      )}

      {["five", "four", "three"].includes(instances) && (
        <LibraryInstance
          className={`${
            direction === "column" && ["five", "four"].includes(instances)
              ? "class-5"
              : instances === "three" && direction === "row"
              ? "class-3"
              : instances === "three" && direction === "column"
              ? "class-4"
              : "class-6"
          }`}
        />
      )}

      {["five", "four"].includes(instances) && (
        <LibraryInstance
          className={`${
            instances === "four" && direction === "column"
              ? "class-4"
              : direction === "row" && instances === "five"
              ? "class-6"
              : direction === "column" && instances === "five"
              ? "class-5"
              : "class-3"
          }`}
        />
      )}

      {instances === "five" && <LibraryInstance className={`${direction === "column" ? "class-4" : "class-3"}`} />}
    </div>
  );
};

Stack.propTypes = {
  instances: PropTypes.oneOf(["two", "three", "four", "one", "five"]),
  direction: PropTypes.oneOf(["row", "column"]),
  spacing: PropTypes.oneOf(["seven", "zero", "two", "three", "four", "one", "five", "eight", "six"]),
  visible: PropTypes.bool,
};
