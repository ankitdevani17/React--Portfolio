import React from 'react'
import "./Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
  return <>  
    <div className ="nav">
        <div className ="nav_left">
         <p> ✨ Ankit Devani</p>
        </div>
        <div className ="nav_right">
         <ul className = "navul">
             <li className = "navl">
                 Home
             </li>
             <li className="navl">
                 About
             </li>
             <li className="navl">
                 Projects
             </li>
             <li className="navl">
                 Contact
             </li>
         </ul>
        </div>

    </div>
  </>
};

export default Navbar;
