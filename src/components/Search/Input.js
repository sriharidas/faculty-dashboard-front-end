import React, { useState } from "react";

export default function Input(props) {
  const id = props.label.split(" ").join("-").toLowerCase();
  const [Value, setValue] = useState("");

  const HandleInput = (e) => {
    setValue(e.target.value);
    if (props.type !== "range") {
      return;
    }
    let min = props.min,
      max = props.max,
      sliderPosition;
    const sliderValueElement = document.querySelector(
      `#form-groups-range-value-${id}`
    );
    sliderPosition =
      Math.abs(min) !== Math.abs(max)
        ? (Value / Math.abs(max - min)) * 100
        : 50 + (Value / (max - min)) * 100;
    // console.log(50 + (Value / (max - min)) * 100);
    console.log(sliderPosition);
    if (sliderPosition > 5 && sliderPosition < 95) {
      sliderValueElement.style.display = "block";

      sliderValueElement.style.left = `calc(${sliderPosition}% - 10px)`;
    } else {
      sliderValueElement.style.display = "none";
    }
  };
  return (
    <div className="search-input-groups">
      <label htmlFor={id}>{props.label}</label>
      <input
        type={props.type}
        placeholder={props.label}
        name={id}
        id={id}
        onInput={HandleInput}
        value={Value}
        className={`form-groups-${props.type}`}
        step={props.type === "range" ? props.step : ""}
        min={props.min}
        max={props.max}
      />
      {props.type === "range" ? (
        <>
          <span
            className={`form-groups-range-min`}
            id={`form-groups-range-min-${id}`}
          >
            {props.min}
          </span>
          <span
            className={`form-groups-range-value`}
            id={`form-groups-range-value-${id}`}
          >
            {Value}
          </span>
          <span
            className={`form-groups-range-max form-groups-range-max-${id}`}
            id={`form-groups-range-max-${id}`}
          >
            {props.max}
          </span>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
