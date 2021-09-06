import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ResultsPersonData({ data }) {
  console.log(data);
  return (
    <div className="results-data-container">
      {Object.keys(data).map((x) => (
        <p>
          <span className="results-data-title">{x} </span>
          <span className="results-data-value"> {data[x]}</span>
        </p>
      ))}
    </div>
  );
}
