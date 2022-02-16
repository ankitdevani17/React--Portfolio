import React from "react"
import Intro from "./Components/Intro";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import { Route,Routes } from "react-router-dom";
const App = () => {
  return (<> 
  <Navbar/>
  <Routes>
  <Route exact path="/" element ={<Intro/>}/>
    <Route  path="/projects" element ={<Projects/>}/>
    <Route  path="/About" element ={<About/>}></Route>
    <Route  path="/Contact" element ={<Contact/>}></Route>
  </Routes>
 </>)
};

export default App;