import React from 'react'
import "./Projects.css";
import Card from './Card';
import Sdata from './Sdata';
function Projects() {
    return (<><div className = "my-5">
    <h1 className = "text-center project-text">
      Projects I've worked on
    </h1>
 </div>
 <div className ="container-fluid project">
   <div className="row">
     <div className = "col-10 mx-auto">
     <div className = "row gy-4"> 
   {
      Sdata.map((val,ind) =>{
        return  <Card key ={ind}  desc = {val.desc} text={val.text} link={val.link} />
      })
  }
     </div>
     </div> 
   </div>
 </div></>
 
    )
}

export default Projects
