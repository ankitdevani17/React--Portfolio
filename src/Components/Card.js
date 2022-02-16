import React from 'react';
import "./Card.css"
const Card = (props) => {
    return <>
<div className="col-md-4 col-10 mx-auto">
<div className="card">
  <div className="card-body">
    <h5 className="card-title card-title">{props.text}</h5>
    <p className="card-text mb-2">{props.desc}</p>
    <a href={props.link} className="card-link">Let's Code</a>
  </div>
</div>
 </div>
 
    </>
};

export default Card;
