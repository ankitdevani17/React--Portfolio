import React from 'react'
import "./Contact.css";
import Phone from "../images/phone.png";
import Email from "../images/email.png";
import Address from "../images/address.png";
function Contact() {
    return (
        <div className="c">
  <div className="c-wrapper">
  <h2>Contact Me</h2>
      <div className="c-left">
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +91 8866556966
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Email} alt="" />
              devaniankit1990@gmail.com
            </div>
            <div className="c-info-item">
              <img className="c-icon" src={Address} alt="" />
              4,Ruchika Apartment,ShantiSadan Society
              Ellisbridge,Ahmedabad -380006
            </div>
          </div>
        </div>
      </div>
      <div className="c-right">
          <h2 className='cheader'> Skills </h2>
          <p className ="cp">Python</p>
<div class="container">
  <div class="skills html">90%</div>
</div>

<p>ReactJS</p>
<div class="container">
  <div class="skills css">80%</div>
</div>

<p>NodeJS</p>
<div class="container">
  <div class="skills js">65%</div>
</div>

<p>Figma</p>
<div class="container">
  <div class="skills php">80%</div>
</div>
      </div>
  </div>
    )
}

export default Contact
