import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResultsList({ list, updateId, updateIndex, Index }) {
  console.log("list", list);
  const changeIndexHandler = (e) => {
    let operation = e.target.getAttribute("data-operation");
    if (operation === "-")
      if (Index.start > 0)
        updateIndex({
          start: Index.start - 18,
          end: Index.end - 18,
        });
      else if (Index.end <= list.length)
        updateIndex({
          start: 0,
          end: 18,
        });
      else
        updateIndex({
          start: Index.start,
          end: Index.end,
        });
    else if (Index.end <= list.length)
      updateIndex({
        start: Index.start + 18,
        end: Index.end + 18,
      });
    console.log("index", Index);
  };
  return (
    <div className="results-list-container">
      <div className="results-list-page-nav">
        <p>Results </p>
        <button data-operation="-" onClick={changeIndexHandler}>
          &lt;
        </button>{" "}
        {Index.start} - {Index.end}
        <button data-operation="+" onClick={changeIndexHandler}>
          &gt;
        </button>{" "}
      </div>
      {list.length > 0 ? (
        <ul>
          {list.slice(Index.start, Index.end).map((x) => (
            <li onClick={() => updateId(x.faculty_id)}>
              <Link>{`${x.faculty_id} - ${x.name}`}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <span>No Data Found</span>
      )}
    </div>
  );
}
