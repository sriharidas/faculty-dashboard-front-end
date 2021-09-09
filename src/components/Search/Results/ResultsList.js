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
      <h3 style={{backgroundColor:'rgb(25, 140, 255)',
    color:'white',
    textAlign:'center',
    padding:'5px'}}>FACULTY LIST</h3>

      {list.length > 0 ? (
        <div className="results">
        
        <ul>
          {list.slice(Index.start, Index.end).map((x) => (
            <li onClick={() => updateId(x.faculty_id)}>
              <Link>
              <img src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png" style={{height:'30px',width:'50px'}}/>
              <span style={{textAlign:'left',paddingTop:'-10px',margin:'10px'}}> {`${x.faculty_id} - ${x.name}`}</span></Link>
            </li>
          ))}
        </ul>
        </div>
      ) : (
        <span>No Data Found</span>
      )}
    </div>
  );
}
