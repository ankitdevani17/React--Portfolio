import React from 'react'
import "./About.css";
const About = () => {
    return (
        <div>

        <div class="a">
         <div class="a-left">
         <h2> About Me</h2>
         <p className="a-desc">
         I am a third year CSE Undergrad at Ahmedabad University.
         My area of interests are Web Development & Design.
         <div className="icons">
         <a href="https://www.linkedin.com/in/ankit-devani-417651190/" class="fa fa-linkedin" target="__ankit"></a>
         <a href="https://github.com/ankitdevani17" class="fa fa-github" target="__ankit"></a>
         <a href="mailto:devaniankit1990@.gmail.com" class="fa fa-envelope" target="__ankit"></a>
         </div>

        </p>
         </div>

        <div class="a-right">
        <h2> Positions of Responsibility</h2>
        <ul className = "a-right-list">
            <li>Treasurer, The Management Club, Ahmedabad University</li>
            <li>CDC Placement Committee Member, Ahmedabad University</li>
            <li>Registration Head, Ingenium Techfest 2021</li>
            <li>Student Mitr, Ahmedabad University</li>
            <li>Campus Ambassador 2020, IIT Roorkee Techfest</li>
            <li>Instructor at InvincibleNGO</li>
        </ul>
        </div>

        </div>
        </div>
 
    )
}

export default About
