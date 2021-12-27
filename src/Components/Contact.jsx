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
              4,Ruchika Apartment,ShantiSadan Society<br/>
              Ellisbridge,Ahmedabad -380006
            </div>
          </div>
        </div>
      </div>
      <div className="c-right">
          
      </div>
  </div>
    )
}

export default Contact
