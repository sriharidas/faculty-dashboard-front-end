import React, { useState, useEffect } from "react";
import axios from "axios";
import Input from "./Input";
import ResultsList from "./Results/ResultsList";
//import ResultsPersonData from "./Results/ResultsPersonData";
import MultiRangeSlider from "./MultiRangeSlider";
import Select from "./Select";
export default function SearchContainer(props) {
  const [query, setQuery] = useState({});
  const [List, setList] = useState([]);
  const [PersonData, setPersonData] = useState([]);
  const [searchID, setSearchID] = useState("");
  const [Index, setIndex] = useState({
    start: 0,
    end: 18,
  });

  // Updating State when input values change
  const changeHandler = (key, val) => {
    setQuery((prevState) => ({
      ...prevState,
      [key]: val,
    }));
    setIndex({
      start: 0,
      end: 18,
    });
    if (Object.keys(query).length <= 0) return;
  };

  // fetching list of faculties

  useEffect(() => {
    const response = async () => {
      const { data } = await axios.get(
        `http://127.0.0.1:8000/api/faculty/lists/`
      );
      JSON.stringify(data);
      setList(data);
      setPersonData(data);
    };
    response();
  }, []);

  // Displaying Faculty Details by their Id

  useEffect(() => {
    if (searchID === "") return;
    console.log(searchID);
    const fetchPerson = async () => {
      const response = fetch(
        `http://127.0.0.1:8000/api/faculty/lists/?faculty_id__icontains=${searchID}`
      );
      const person = await (await response).json();
      console.log("faculty", person);
      setPersonData(person);
    };
    fetchPerson();
  }, [searchID]);

  // request based on Input values

  useEffect(() => {
    let url = "api/faculty/lists/?";
    if (!Object.keys(query)) return;
    Object.keys(query).forEach((x) => {
      url +=
        typeof query[x] === "number"
          ? `${x}__lte=${query[x]}&`
          : `${x}__icontains=${query[x]}&`;
    });
    const fetchData = async (url) => {
      const resp = await fetch(`http://localhost:8000/${url}`);
      const response = await resp.json();
      setPersonData(response);
      setList(response);
      
    };
    fetchData(url);
    console.log(url)
  }, [query]);
  
  useEffect(()=>{
    console.log(query)
  }, [query])

  return (
    <>
      <div className="search-container">
        {facultyData.map((field) =>
          field["data-element"] === "input" ? (
           field['type'] === 'range' ?   <MultiRangeSlider
           {...field}
           onChange={changeHandler }
         /> : <Input {...field} onChange={changeHandler} />
          ) : (
            // <Input label={field.label} type={field.type} />
            <Select {...field} onChange={changeHandler} />
          )
        )}
      </div>
      <div className="search-results-container">
        <hr />
        <div className="search-results">
          
          {/* checking whether the states have same length before rendering */}
          {PersonData.length === List.length || PersonData.length > 0 ? (
            <>
              <ResultsList
                list={List}
                updateId={setSearchID}
                updateIndex={setIndex}
                Index={Index}
              />
              
            </>
          ) : (
            <>
              {/* This element will render when there is no match found by checking the length of state variable ie, PersonData */}
              <span>No Match Found</span>
            </>
          )}
        </div>
      </div>
    </>
  );
}

const facultyData = [
  {
    label: "Faculty Id",
    type: "text",
    "data-element": "input",
    id: "faculty_id",
  },
  {
    label: "Faculty Name",
    type: "text",
    "data-element": "input",
    id: "name",
  },
  {
    label: "Designation",
    "data-element": "select",
    id: "designation",
    url: "/designation",
  },
  {
    label: "Department",
    "data-element": "select",
    id: "department",
    url: "/dept",
  },
  {
    label: "Central Responsibility",
    "data-element": "select",
    id: "central_responsibility",
    url: "/cr",
  },
  {
    label: "Email Id",
    type: "text",
    "data-element": "input",
    id: "email",
  },
  {
    label: "Date of joining",
    type: "date",
    "data-element": "input",
    id: "date_of_joining",
  },
  {
    label: "FAP 2021 Score",
    type: "range",
    min: 0,
    max: 5,
    step: 0.1,
    "data-element": "input",
    id: "FAP_2021_Score",
  },
  {
    label: "Feedback 2021 Score",
    type: "range",
    min: 0,
    max: 5,
    step: 0.1,
    "data-element": "input",
    id: "Feedback_2021_Score",
  },
  {
    label: "FRD 2021",
    type: "range",
    min: 0,
    max: 5,
    step: 0.1,
    "data-element": "input",
    id: "FRP_2021",
  },
  {
    label: "FRS 2021",
    type: "range",
    min: -500,
    max: 500,
    step: 10,
    "data-element": "input",
    id: "FRS_2021",
  },
];
