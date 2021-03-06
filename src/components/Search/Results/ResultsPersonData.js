import React, { useEffect, useState } from "react";
import axios from "axios";
export default function ResultsPersonData({ data }) {
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
      <span className="particulars"><p><h4>FACULTY INFORMATION</h4></p></span>
      {  Object.keys(data).map((x,faculty_id) => {
        // console.log(Object.keys(data))
        return(
          //  typeof data[x] === 'string' && data[x].toLowerCase().includes('nan') ? '':
          
          fieldGroup.indexOf(x) > 0 ? '' :
          <div key={faculty_id}>

        <p>
          
        <span className="results-data-title"><p><b>{x}</b></p> </span>
        <span className="results-data-value"> <p>:{ data[x]}</p></span>
      </p>
      </div>
      )})}
<span className="details">DETAILS</span>
<div style={{display:'grid',gridTemplateColumns:'1.5fr 1fr 1fr 1fr'}}>
<span className="particulars"><p><h4>PARTICULARS</h4></p></span>
<div><p><h4>2020-20222</h4></p></div>
<div><p><h4>2020-2021</h4></p></div>
<div><p><h4>2020-2021</h4></p></div>


{/*<div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)'}}>

{<div style={{display:'grid',gridGap:'1rem'}}>
{
  Object.keys(fieldGroup).length>0 && fieldGroup.map((x,index) => <div key={index} style={{display:'flex', flexDirection:'column', }}>
    <span>{data[x]}</span>
  </div>)
}
</div>}
</div>*/}
    </div>
    </div>
  );
}
