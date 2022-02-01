import React from 'react'
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return <>  
  <nav>
      <div class="logo">Ankit Devani</div>
      <input type="checkbox" id="click"/>
      <label for="click" class="menu-btn">
        <i class="fas fa-bars"></i>
      </label>
      <ul>
      <li className = "navl">
                 <NavLink exact activeclassName = "active_clas " to ='/'>Home</NavLink>
             </li>
             <li className="navl">
             <NavLink exact activeclassName = "active_clas " to ='/About'>About</NavLink>
             </li>
             <li className="navl">
             <NavLink exact activeclassName = "active_clas " to ='/projects'>Projects</NavLink>
             </li>
             <li className="navl">
             <NavLink exact activeclassName = "active_clas " to ='/contact'>Contact</NavLink>
             </li>
      </ul>
    </nav>
  </>
};

export default Navbar;
