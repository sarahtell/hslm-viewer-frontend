import React from "react";
import Layout from "./components/Layout";
import pdf from './components/cv.pdf'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAtlassian, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"




const Startpage = () => {
  return (<Layout>
  <div className="flex flex-col items-center">
  <img className="w-1/3 rounded-full m-10" src="./Profilepic.jpg" alt="SARAH TELL"></img>
<h1 className="flex flex-col items-center font-sans text-5xl m-5">Sarah Tell</h1>
<a href={pdf}>Download CV</a>
<a href="https://www.linkedin.com/in/sarah-tell-90/"><FontAwesomeIcon size={"lg"} icon={faLinkedinIn} color="blue" /></a>
</div>
  </Layout>);
};

export default Startpage;
