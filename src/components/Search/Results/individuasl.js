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
{/* <div style={{display:'grid',gridTemplatRows:'1fr 1fr 1fr 1fr',gridGap:'1rem'}}> */}
<div className="tab" style={{display:'grid',gridTemplateColumns:'2fr 1fr 1fr 1fr' ,gridGap:'1rem'}}>
<span className="particulars"><p><h4>PARTICULARS</h4></p>
{
  fieldGroup.map(x=> <p style={{color: '#000'}}>{x}</p>)
}
    {/* <  h4 >Faculty Action Plan</ h4 >
    < h4  >Faculty FeedBack Score</  h4 >
    < h4  >Faculty Reward Points</ h4 >
    < h4  >Faculty Reliability Score</ h4 > */}
  </span>


<div><p><h4>2019-2020</h4></p>
<br/>
{<div className="task">
{
  Object.keys(fieldGroup).length>0 && fieldGroup.map((x,index) => <div key={index} style={{display:'flex', flexDirection:'column'}}>
    {x.includes('2020')?<span>{data[x]}</span>:'nan'}
    
  </div>)
}
</div>}
</div>
<div><p><h4>2020-2021</h4></p><br/>
{<div className="task">
{
  Object.keys(fieldGroup).length>0 && fieldGroup.map((x,index) => <div key={index} style={{display:'flex', flexDirection:'column'}}>
    {x.includes('2021')?<span>{data[x]}</span>:'nan'}
    
  </div>)
}
</div>}
</div>
<div><p><h4>2021-2022</h4></p><br/>
<div className="task">
{
  Object.keys(fieldGroup).length>0 && fieldGroup.map((x,index) => <div key={index} style={{display:'flex', flexDirection:'column'}}>
    {x.includes('2022')?<span>{data[x]}</span>:'nan'}
    
  </div>)
}
</div></div>



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
