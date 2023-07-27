/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useReducer } from "react";
import "./style.css";

interface Props {
  placeholder: string;
  value: string;
  adornEnd: boolean;
  placeholder1: boolean;
  value1: boolean;
  label: string;
  adornStart: boolean;
  helper: boolean;
  variant: "outlined" | "filled" | "standard";
  size: "medium" | "small";
  stateProp: "enabled" | "focused" | "hovered" | "error" | "disabled";
  hasValue: boolean;
  className: any;
  minHeightClassName: any;
}

export const TextField = ({
  placeholder = "Placeholder",
  value = "Value",
  adornEnd,
  placeholder1,
  value1 = true,
  label = "Label",
  adornStart,
  helper,
  variant,
  size,
  stateProp,
  hasValue,
  className,
  minHeightClassName,
}: Props): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, {
    variant: variant || "standard",
    size: size || "medium",
    state: stateProp || "enabled",
    hasValue: hasValue || true,
  });

  return (
    <div
      className={`text-field ${className}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      {((!state.hasValue && state.size === "medium") ||
        (!state.hasValue && state.size === "small" && state.state === "disabled" && state.variant === "filled") ||
        (!state.hasValue && state.size === "small" && state.state === "disabled" && state.variant === "standard") ||
        (!state.hasValue && state.size === "small" && state.state === "hovered" && state.variant === "filled") ||
        (!state.hasValue && state.size === "small" && state.state === "hovered" && state.variant === "standard") ||
        (!state.hasValue && state.size === "small" && state.variant === "outlined") ||
        (state.hasValue && state.size === "medium" && state.state === "disabled" && state.variant === "outlined") ||
        (state.hasValue && state.size === "medium" && state.state === "hovered" && state.variant === "outlined") ||
        (state.hasValue && state.size === "medium" && state.variant === "filled") ||
        (state.hasValue && state.size === "medium" && state.variant === "standard") ||
        (state.hasValue && state.size === "small" && state.state === "disabled") ||
        (state.hasValue && state.size === "small" && state.state === "enabled" && state.variant === "outlined") ||
        (state.hasValue && state.size === "small" && state.state === "hovered") ||
        (state.hasValue && state.state === "error" && state.variant === "outlined") ||
        (state.hasValue && state.state === "focused" && state.variant === "outlined") ||
        (state.size === "small" && state.state === "enabled" && state.variant === "filled") ||
        (state.size === "small" && state.state === "enabled" && state.variant === "standard") ||
        (state.size === "small" && state.state === "error" && state.variant === "filled") ||
        (state.size === "small" && state.state === "error" && state.variant === "standard") ||
        (state.size === "small" && state.state === "focused" && state.variant === "filled") ||
        (state.size === "small" && state.state === "focused" && state.variant === "standard")) && (
        <div className={`input variant-2-${state.variant} state-2-${state.state} size-7-${state.size}`}>
          {state.variant === "standard" && (
            <>
              <div className={`templabel state-3-${state.state} has-value-${state.hasValue}`}>
                {!state.hasValue && <>Label</>}

                {state.hasValue && <>{label}</>}
              </div>
              <div className={`label has-value-0-${state.hasValue} state-4-${state.state}`}>
                {!state.hasValue && <>{label}</>}

                {state.hasValue && (
                  <>
                    <div className="min-height" />
                    <>{value1 && <div className="value">{value}</div>}</>
                  </>
                )}
              </div>
              <img
                className="underline"
                alt="Underline"
                src={
                  state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-37.svg"
                    : state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-36.svg"
                    : state.state === "enabled"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-27.svg"
                    : state.state === "hovered"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-23.svg"
                    : "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-39.svg"
                }
              />
            </>
          )}

          {state.variant === "filled" && (
            <>
              <div className={`input-2 size-8-${state.size} has-value-1-${state.hasValue}`}>
                {!state.hasValue && <div className="label-2">{label}</div>}

                {state.hasValue && (
                  <>
                    <div className="label-3">{label}</div>
                    <div className="content">
                      {["disabled", "enabled", "error", "hovered"].includes(state.state) && (
                        <div className="min-height" />
                      )}

                      {value1 && <div className="value-2">{value}</div>}

                      <div className="min-height-2" />
                      {state.state === "focused" && <div className="min-width-2" />}
                    </div>
                  </>
                )}
              </div>
              <img
                className="underline-2"
                alt="Underline"
                src={
                  state.state === "focused"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-36.svg"
                    : state.state === "disabled"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-37.svg"
                    : state.state === "error"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-39.svg"
                    : state.state === "hovered"
                    ? "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-23.svg"
                    : "https://generation-sessions.s3.amazonaws.com/792ffb3e6c63ab2fbf08549b9fe966f4/img/underline-27.svg"
                }
              />
            </>
          )}

          {state.variant === "outlined" && (
            <div className="content-2">
              {!state.hasValue && (
                <>
                  <div className="min-height" />
                  <div className="label-4">Label</div>
                </>
              )}

              {state.hasValue && (
                <>
                  <div className={`min-height ${minHeightClassName}`} />
                  <>{value1 && <div className="value-3">{value}</div>}</>
                </>
              )}
            </div>
          )}

          {state.variant === "outlined" && state.hasValue && (
            <div className="label-container">
              <div className="label-5">{label}</div>
            </div>
          )}
        </div>
      )}

      {state.variant === "outlined" && state.hasValue && state.size === "medium" && state.state === "enabled" && (
        <>
          <div className="content-wrapper">
            <div className="content-3">
              <div className="min-height" />
              {value1 && <div className="value-4">{value}</div>}
            </div>
          </div>
          <div className="label-container">
            <div className="label-6">{label}</div>
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

TextField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  adornEnd: PropTypes.bool,
  placeholder1: PropTypes.bool,
  value1: PropTypes.bool,
  label: PropTypes.string,
  adornStart: PropTypes.bool,
  helper: PropTypes.bool,
  variant: PropTypes.oneOf(["outlined", "filled", "standard"]),
  size: PropTypes.oneOf(["medium", "small"]),
  stateProp: PropTypes.oneOf(["enabled", "focused", "hovered", "error", "disabled"]),
  hasValue: PropTypes.bool,
};
