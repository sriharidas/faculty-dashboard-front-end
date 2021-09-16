import React, { useCallback, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import "../../MultiRangeSlider.css";

const MultiRangeSlider = (props) => {
  const { min, max, onChange, id } = props
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  // useEffect(() => {
  //   onChange({ min: minVal, max: maxVal });
  // }, [minVal, maxVal, onChange]);

  return (
    <div className="container search-input-groups">
      <label>{props['label']}</label>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        style={{marginTop: '20px'}}
        onChange={(event) => {
          onChange(event.target.className.split(' ').slice(-1).pop(), Number(event.target.value))
          console.log(event.target.className.split(' ').slice(-1))
          const value = Math.min(Number(event.target.value), maxVal - props.step);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`thumb thumb--left ${id}`}
        style={{ zIndex: minVal > max - 100 && "5" }}
        step= {0.1}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        className={id}
        onChange={(event) => {
          onChange(event.target.className.split(' ').slice(-1).pop(), Number(event.target.value))

          const value = Math.max(Number(event.target.value), minVal + props.step);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        step= {0.1}
        className={`thumb thumb--right ${id}`}

      />

      <div className="slider">
        <div className="slider__track" />
        <div ref={range} className="slider__range" />
        <div className="slider__left-value">{minVal}</div>
        <div className="slider__right-value">{maxVal}</div>
      </div>
    </div>
  );
};

MultiRangeSlider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MultiRangeSlider;
