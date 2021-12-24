import "./Intro.css"
import Me from "../images/me.jpg";
const Intro = () => {
    return (
        <div className="i">
           <div className="i-left">
           <div className="i-left-wrapper">
               <h2 className="i-intro"> Hello, My name is </h2>
               <h1 className="i-name"> Ankit Devani</h1>
               <div className="i-title">
                   <div className="i-title-wrapper">
                       <div className="i-title-item">Web Developer</div>
                       <div className="i-title-item">CSE Undergrad</div>  
                       <div className="i-title-item">Tech Enthusiast</div>  
                   </div>
               </div>
               <div className="i-desc">
              I am a third year CSE Undergrad and a Web Dev Enthusiast with a keen interest in MERN Stack.
          </div>
           </div>
           </div>
           <div className="wrapper">
            <img src={Me} className="i-img" alt="Responsive image"/>
            </div>

           

           </div>
    )
}
export default Intro


