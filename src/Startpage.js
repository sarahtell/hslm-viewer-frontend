import React from "react";
import Layout from "./components/Layout";
import pdf from "./components/cv.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Startpage = () => {
  return (
    <Layout>
      <div className="flex flex-col h-full items-center">
        <img
          className="w-1/3 max-w-md rounded-full m-10"
          src="./Profilepic.jpg"
          alt="SARAH TELL"
        ></img>

        <h1 className="flex flex-col items-center font-sans text-5xl m-5">
          Sarah Tell
        </h1>
        <h2 className="mt-5 text-4xl justify-center"> I like coding.</h2>
        <h3 className="flex flex-col justify-center mt-5">
          Head to{" "}
          <Link className="text-gray-700 font-bold" to="/bridgeresponse">
            Projects
          </Link>{" "}
          to check out my bridge response simulator for passing trains.
        </h3>
        <a className="bg-gray-700 text-white p-3 mt-20 rounded-md" href={pdf}>
          Download CV
        </a>
      </div>
      <div className="flex fixed w-full bottom-0 bg-gray-700 justify-center">
        <a className="m-5" href="https://www.linkedin.com/in/sarah-tell-90/">
          <FontAwesomeIcon size={"2x"} icon={faLinkedinIn} color="white" />
        </a>
      </div>
    </Layout>
  );
};

export default Startpage;
