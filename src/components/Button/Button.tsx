/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  loadingEnd: boolean;
  loadingStart: boolean;
  label: string;
  startIcon: boolean;
  endIcon: boolean;
  size: "large" | "medium" | "small";
  color: "warning" | "info" | "success" | "secondary" | "primary" | "inherit-text" | "inherit-white" | "error";
  stateProp: "enabled" | "focused" | "hovered" | "loading" | "disabled";
  variant: "text" | "outlined" | "contained";
  className: any;
}

export const Button = ({
  loadingEnd,
  loadingStart = true,
  label = "Label",
  startIcon,
  endIcon,
  size,
  color,
  stateProp,
  variant,
  className,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    size: size || "large",
    color: color || "primary",
    state: stateProp || "enabled",
    variant: variant || "contained",
  });

  return (
    <div
      className={`button state-0-${state.state} color-1-${state.color} ${state.variant} size-3-${state.size} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {state.state === "focused" && (
        <img
          className="img"
          alt="Focus ripple"
          src={
            state.color === "inherit-text" && state.variant === "contained" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-100.svg"
              : state.color === "inherit-white" && state.variant === "contained" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-99.svg"
              : state.variant === "contained" && state.color === "secondary" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-98.svg"
              : state.variant === "contained" && state.color === "error" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-97.svg"
              : state.color === "warning" && state.variant === "contained" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-96.svg"
              : state.color === "info" && state.variant === "contained" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-95.svg"
              : state.variant === "contained" && state.color === "success" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-94.svg"
              : state.color === "primary" && state.variant === "contained" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-93.svg"
              : state.color === "inherit-text" && state.variant === "contained" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-92.svg"
              : state.color === "inherit-white" && state.variant === "contained" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-91.svg"
              : state.color === "secondary" && state.variant === "contained" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-90.svg"
              : state.variant === "contained" && state.color === "error" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-89.svg"
              : state.color === "warning" && state.variant === "contained" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-88.svg"
              : state.color === "info" && state.variant === "contained" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-87.svg"
              : state.variant === "contained" && state.color === "success" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-86.svg"
              : state.variant === "contained" && state.size === "small" && state.color === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-85.svg"
              : state.size === "small" && state.variant === "contained" && state.color === "inherit-text"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-84.svg"
              : state.size === "small" && state.variant === "contained" && state.color === "inherit-white"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-83.svg"
              : state.variant === "contained" && state.size === "small" && state.color === "secondary"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-82.svg"
              : state.variant === "contained" && state.size === "small" && state.color === "error"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-81.svg"
              : state.size === "small" && state.color === "warning" && state.variant === "contained"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-80.svg"
              : state.color === "info" && state.variant === "contained" && state.size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-79.svg"
              : state.variant === "contained" && state.size === "small" && state.color === "success"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-78.svg"
              : state.variant === "outlined" && state.color === "primary" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-77.svg"
              : state.color === "inherit-text" && state.variant === "outlined" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-76.svg"
              : state.color === "inherit-white" && state.variant === "outlined" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-75.svg"
              : state.variant === "outlined" && state.color === "secondary" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-74.svg"
              : state.variant === "outlined" && state.color === "error" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-73.svg"
              : state.color === "warning" && state.variant === "outlined" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-72.svg"
              : state.color === "info" && state.variant === "outlined" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-71.svg"
              : state.variant === "outlined" && state.color === "success" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-70.svg"
              : state.color === "primary" && state.variant === "outlined" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-69.svg"
              : state.color === "inherit-text" && state.variant === "outlined" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-68.svg"
              : state.color === "inherit-white" && state.variant === "outlined" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-67.svg"
              : state.color === "secondary" && state.variant === "outlined" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-66.svg"
              : state.variant === "outlined" && state.color === "error" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-65.svg"
              : state.color === "warning" && state.variant === "outlined" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-64.svg"
              : state.variant === "outlined" && state.color === "info" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-63.svg"
              : state.variant === "outlined" && state.color === "success" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-62.svg"
              : state.variant === "outlined" && state.size === "small" && state.color === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-61.svg"
              : state.color === "inherit-text" && state.variant === "outlined" && state.size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-60.svg"
              : state.color === "inherit-white" && state.variant === "outlined" && state.size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-59.svg"
              : state.variant === "outlined" && state.size === "small" && state.color === "secondary"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-58.svg"
              : state.variant === "outlined" && state.size === "small" && state.color === "error"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-57.svg"
              : state.color === "warning" && state.variant === "outlined" && state.size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-56.svg"
              : state.variant === "outlined" && state.color === "info" && state.size === "small"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-55.svg"
              : state.variant === "outlined" && state.size === "small" && state.color === "success"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-54.svg"
              : state.color === "primary" && state.variant === "text" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-53.svg"
              : state.color === "inherit-text" && state.variant === "text" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-52.svg"
              : state.color === "inherit-white" && state.variant === "text" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-51.svg"
              : state.color === "secondary" && state.variant === "text" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-50.svg"
              : state.variant === "text" && state.color === "error" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-49.svg"
              : state.color === "warning" && state.variant === "text" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-48.svg"
              : state.color === "info" && state.variant === "text" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-47.svg"
              : state.variant === "text" && state.color === "success" && state.size === "medium"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-46.svg"
              : state.variant === "text" && state.color === "primary" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-45.svg"
              : state.color === "inherit-text" && state.variant === "text" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-44.svg"
              : state.color === "inherit-white" && state.variant === "text" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-43.svg"
              : state.variant === "text" && state.color === "secondary" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-42.svg"
              : state.variant === "text" && state.color === "error" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-41.svg"
              : state.color === "warning" && state.variant === "text" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-40.svg"
              : state.color === "info" && state.variant === "text" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-39.svg"
              : state.variant === "text" && state.color === "success" && state.size === "large"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-38.svg"
              : state.size === "small" && state.variant === "text" && state.color === "primary"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-37.svg"
              : state.color === "inherit-text" && state.size === "small" && state.variant === "text"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-36.svg"
              : state.color === "inherit-white" && state.size === "small" && state.variant === "text"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-35.svg"
              : state.size === "small" && state.variant === "text" && state.color === "secondary"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-34.svg"
              : state.size === "small" && state.variant === "text" && state.color === "error"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-33.svg"
              : state.color === "warning" && state.size === "small" && state.variant === "text"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-32.svg"
              : state.color === "info" && state.size === "small" && state.variant === "text"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-31.svg"
              : state.size === "small" && state.variant === "text" && state.color === "success"
              ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-30.svg"
              : "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-101.svg"
          }
        />
      )}

      <div className="base-2">
        {state.state === "loading" && (
          <>
            <>
              {loadingStart && (
                <div className="progress-circular">
                  <div className="ring">
                    <img
                      className="line"
                      alt="Line"
                      src="https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/line-8.svg"
                    />
                  </div>
                  <div className="min-width" />
                </div>
              )}
            </>
          </>
        )}

        <div className="text-wrapper-2">{label}</div>
      </div>
    </div>
  );
};

function reducer(state: any, action: any) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        state: "hovered",
      };

    case "mouse_leave":
      return {
        ...state,
        state: "enabled",
      };
  }

  return state;
}

Button.propTypes = {
  loadingEnd: PropTypes.bool,
  loadingStart: PropTypes.bool,
  label: PropTypes.string,
  startIcon: PropTypes.bool,
  endIcon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf([
    "warning",
    "info",
    "success",
    "secondary",
    "primary",
    "inherit-text",
    "inherit-white",
    "error",
  ]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "hovered", "loading", "disabled"]),
  variant: PropTypes.oneOf(["text", "outlined", "contained"]),
};
