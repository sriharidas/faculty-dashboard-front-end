import React from "react";
import Input from "./Input";

export default function SearchContainer(props) {
  return (
    <div className="search-container">
      {facultyData.map((field) =>
        field.type === "range" ? (
          <Input
            label={field.label}
            type={field.type}
            min={field.min}
            max={field.max}
            step={field.step}
          />
        ) : (
          <Input label={field.label} type={field.type} />
        )
      )}
    </div>
  );
}

const facultyData = [
  {
    label: "Faculty Id",
    type: "text",
  },
  {
    label: "Faculty Name",
    type: "text",
  },
  {
    label: "Designation",
    type: "text",
  },
  {
    label: "Department",
    type: "text",
  },
  {
    label: "Central Responsibility",
    type: "text",
  },
  {
    label: "Email Id",
    type: "text",
  },
  {
    label: "FAP 2021 Score",
    type: "range",
    min: "0",
    max: "5",
    step: "0.1",
  },
  {
    label: "Feedback 2021 Score",
    type: "range",
    min: "0",
    max: "5",
    step: "0.1",
  },
  {
    label: "FRD 2021",
    type: "range",
    min: "0",
    max: "5",
    step: "0.1",
  },
  {
    label: "FRS 2021",
    type: "range",
    min: "-500",
    max: "500",
    step: "10",
  },
];
