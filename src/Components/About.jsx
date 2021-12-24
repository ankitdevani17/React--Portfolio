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
         My interests of area are Web Development & Design.
 
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
