import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ResultsPersonData({ data }) {
  console.log('data',data);
  const [fieldGroup, setFieldGroup ] = useState([])

  useEffect(()=>{
    // console.log('DATA', Object.keys(data).filter((a)=>a.includes('Feedback') || a.includes('FRP') || a.includes('FAP') || a.includes('FRS')))
    setFieldGroup(Object.keys(data).filter((a)=>a.includes('Feedback') || a.includes('FRP') || a.includes('FAP') || a.includes('FRS')))
  }, [])
  return (
    <div className="results-data-container">
      <center><img src="https://upload.wikimedia.org/wikipedia/en/7/77/Bannari_Amman_Institute_of_Technology_logo.png" style={{width:'120px',height:'70px',textAlign:'center',borderRadius:'50%',objectFit:'contain'}}/></center>
      <span className="result-data-name">{data.name}</span>
      <span className="result-data-department">{data.department}</span>
      <p>FACULTY BASIC INFORMATION</p>
      {  Object.keys(data).map((x) => {
        // console.log(Object.keys(data))
        return(
          //  typeof data[x] === 'string' && data[x].toLowerCase().includes('nan') ? '':
          fieldGroup.indexOf(x) > 0 ? '' :
        <p>
        <span className="results-data-title">{x} </span>
        <span className="results-data-value"> :{ data[x]}</span>
      </p>
      )})}
  <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)'}}>

      {
        Object.keys(fieldGroup).length>0 && fieldGroup.map(x => <div style={{display:'flex', flexDirection:'column', }}>
          <span>{x}</span>
          <span>{data[x]}</span>
        </div>)
      }
  </div>
    </div>
  );
}
