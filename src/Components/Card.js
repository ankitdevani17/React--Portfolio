import React from 'react';
import "./Card.css"
const Card = (props) => {
    return <>
  <div class="column">
    <div class="card">
    <div class="card-body">
      <h5 class="card-title mb-3">{props.text}</h5>
      <p class="card-text">{props.desc}</p>
      <a href={props.link} class="btn btn-primary mb-3">Go to Repo</a>
    </div>
    </div>
  </div>
    </>
};

export default Card;
