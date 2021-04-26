import React from "react";
import Layout from "./components/Layout";
import pdf from "./components/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Startpage = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <img
          className="w-1/3 rounded-full m-10"
          src="./Profilepic.jpg"
          alt="SARAH TELL"
        ></img>

        <h1 className="flex flex-col items-center font-sans text-5xl m-5">
          Sarah Tell
        </h1>
        <h2 className="mt-5 text-4xl">Jag gillar kod</h2>
        <a className="mt-5" href={pdf}>Download CV</a>
      </div>
      <div className="flex absolute w-full bottom-0 bg-gray-700 justify-center">
        <a className="p-5" href="https://www.linkedin.com/in/sarah-tell-90/">
          <FontAwesomeIcon size={"2x"} icon={faLinkedinIn} color="white" />
        </a>
      </div>
    </Layout>
  );
};

export default Startpage;
