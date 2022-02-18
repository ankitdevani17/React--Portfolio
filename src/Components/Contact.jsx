import React from 'react'
import "./Contact.css";
import Phone from "../images/phone.png";
import Email from "../images/email.png";
import Address from "../images/address.png";

function Contact() {
    return (<>
  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
          <div class="text-one">4, First Floor, Ruchika Apartment,</div>
          <div class="text-two">ShantiSadan Society, Ahmedabad-380006</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 8866556966</div>
        </div>
        <div class="email details">
          <div class="topic">Email</div>
          <div class="text-one">devaniankit1990@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Enter your details! We will contact you.</div>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">  
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>



    </>)}
    export default Contact;
{/*     
//     return (
//       <div className ="for-footer">
//         <div className="c">
//   <div className="c-wrapper">
//   <h2>Contact Me</h2>
//       <div className="c-left">
//           <div className="c-info">
            // <div className="c-info-item">
            //   <img src={Phone} alt="" className="c-icon" />
            //   +91 8866556966
            // </div>
            // <div className="c-info-item">
            //   <img className="c-icon" src={Email} alt="" />
            //   devaniankit1990@gmail.com
            // </div>
            // <div className="c-info-item">
            //   <img className="c-icon" src={Address} alt="" />
            //   4,Ruchika Apartment,ShantiSadan Society
            //   Ellisbridge,Ahmedabad -380006
            // </div>
//           </div>
//         </div>
//       </div>
//       <div className="c-right">
//           <h2 className='cheader'> Skills </h2>
//           <div className = "crow">
//             <div className = "ccolumn">
//                 <button i class="fab fa-html5"/>
//             </div>
//             <div className = "ccolumn">
//                 <button i class="fab fa-html5"/>
//             </div>
//             <div className = "ccolumn">
//             <button i class="fab fa-html5"/>
//             </div>
//           </div>
//       </div>
      
//   </div>
//   <footer>
        
// <p align="center">@Ankit Devani, Some rights reserved</p>

  
// </footer>
// </div>
//     )
// }

// export default Contact */}
