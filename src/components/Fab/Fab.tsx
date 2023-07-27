/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import { Addfilled7 } from "../../icons/Addfilled7";
import "./style.css";

interface Props {
  label: string;
  icon: boolean;
  variant: "extended" | "round";
  size: "large" | "medium" | "small";
  color: "default" | "secondary" | "primary" | "inherit-text" | "inherit-white";
  stateProp: "hovered" | "disabled" | "focused" | "enabled";
  className: any;
  baseClassName: any;
  hasButton: boolean;
}

export const Fab = ({
  label = "Fab",
  icon = true,
  variant,
  size,
  color,
  stateProp,
  className,
  baseClassName,
  hasButton = true,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "extended",
    size: size || "large",
    color: color || "default",
    state: stateProp || "enabled",
  });

  return (
    <div
      className={`fab ${state.state} ${state.color} ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {["disabled", "enabled", "hovered"].includes(state.state) && (
        <div className={`base ${state.size} ${state.variant} ${baseClassName}`}>
          {state.variant === "extended" && (
            <>
              <>
                {hasButton && (
                  <div className={`text-wrapper size-${state.size} state-${state.state} color-${state.color}`}>
                    {label}
                  </div>
                )}
              </>
              <>
                {icon && (
                  <Addfilled7
                    className="add-filled"
                    color={
                      (state.color === "default" && state.state === "enabled") ||
                      (state.color === "default" && state.state === "hovered") ||
                      (state.color === "inherit-text" && state.state === "enabled") ||
                      (state.color === "inherit-text" && state.state === "hovered") ||
                      state.state === "disabled"
                        ? "black"
                        : "white"
                    }
                    opacity={
                      (state.color === "default" && state.state === "enabled") ||
                      (state.color === "default" && state.state === "hovered") ||
                      (state.color === "inherit-text" && state.state === "enabled") ||
                      (state.color === "inherit-text" && state.state === "hovered")
                        ? "0.87"
                        : state.state === "disabled"
                        ? "0.38"
                        : undefined
                    }
                  />
                )}
              </>
            </>
          )}

          {state.variant === "round" && (
            <Addfilled7
              className="add-filled"
              color={
                (state.color === "default" && state.state === "enabled") ||
                (state.color === "default" && state.state === "hovered") ||
                (state.color === "inherit-text" && state.state === "enabled") ||
                (state.color === "inherit-text" && state.state === "hovered") ||
                state.state === "disabled"
                  ? "black"
                  : "white"
              }
              opacity={
                (state.color === "default" && state.state === "enabled") ||
                (state.color === "default" && state.state === "hovered") ||
                (state.color === "inherit-text" && state.state === "enabled") ||
                (state.color === "inherit-text" && state.state === "hovered")
                  ? "0.87"
                  : state.state === "disabled"
                  ? "0.38"
                  : undefined
              }
            />
          )}
        </div>
      )}

      {state.state === "focused" && (
        <>
          <img
            className={`focus-ripple size-0-${state.size} variant-${state.variant}`}
            alt="Focus ripple"
            src={
              state.color === "default" && state.variant === "extended" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-28.svg"
                : state.color === "inherit-text" && state.variant === "extended" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-27.svg"
                : state.color === "inherit-white" && state.variant === "extended" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-26.svg"
                : state.variant === "extended" && state.color === "secondary" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-25.svg"
                : state.color === "primary" && state.variant === "extended" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-24.svg"
                : state.color === "default" && state.variant === "extended" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-23.svg"
                : state.color === "inherit-text" && state.variant === "extended" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-22.svg"
                : state.color === "inherit-white" && state.variant === "extended" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-21.svg"
                : state.color === "secondary" && state.variant === "extended" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-20.svg"
                : state.size === "small" && state.variant === "extended" && state.color === "primary"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-19.svg"
                : state.color === "default" && state.variant === "extended" && state.size === "small"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-18.svg"
                : state.color === "inherit-text" && state.variant === "extended" && state.size === "small"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-17.svg"
                : state.color === "inherit-white" && state.variant === "extended" && state.size === "small"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-16.svg"
                : state.size === "small" && state.variant === "extended" && state.color === "secondary"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-15.svg"
                : state.variant === "round" && state.color === "primary" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-14.svg"
                : state.variant === "round" && state.color === "default" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-13.svg"
                : state.variant === "round" && state.color === "inherit-text" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-12.svg"
                : state.variant === "round" && state.color === "inherit-white" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-11.svg"
                : state.variant === "round" && state.color === "secondary" && state.size === "large"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-10.svg"
                : state.variant === "round" && state.color === "primary" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-9.svg"
                : state.variant === "round" && state.color === "default" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-8.svg"
                : state.variant === "round" && state.color === "inherit-text" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-7.svg"
                : state.variant === "round" && state.color === "inherit-white" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-6.svg"
                : state.variant === "round" && state.color === "secondary" && state.size === "medium"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-5.svg"
                : state.variant === "round" && state.size === "small" && state.color === "primary"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-4.svg"
                : state.variant === "round" && state.color === "default" && state.size === "small"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-3.svg"
                : state.variant === "round" && state.color === "inherit-text" && state.size === "small"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-2.svg"
                : state.variant === "round" && state.color === "inherit-white" && state.size === "small"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-1.svg"
                : state.variant === "round" && state.size === "small" && state.color === "secondary"
                ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple.svg"
                : "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/focusripple-29.svg"
            }
          />
          <div className={`div size-1-${state.size} variant-0-${state.variant}`}>
            {state.variant === "extended" && (
              <>
                <div className={`button-2 color-0-${state.color} size-2-${state.size}`}>{label}</div>
                <>
                  {icon && (
                    <Addfilled7
                      className="add-filled"
                      color={["default", "inherit-text"].includes(state.color) ? "black" : "white"}
                      opacity={["default", "inherit-text"].includes(state.color) ? "0.87" : undefined}
                    />
                  )}
                </>
              </>
            )}

            {state.variant === "round" && (
              <Addfilled7
                className="add-filled"
                color={["default", "inherit-text"].includes(state.color) ? "black" : "white"}
                opacity={["default", "inherit-text"].includes(state.color) ? "0.87" : undefined}
              />
            )}
          </div>
        </>
      )}
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

Fab.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.bool,
  variant: PropTypes.oneOf(["extended", "round"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf(["default", "secondary", "primary", "inherit-text", "inherit-white"]),
  stateProp: PropTypes.oneOf(["hovered", "disabled", "focused", "enabled"]),
  hasButton: PropTypes.bool,
};
