import React from "react";
import Layout from "./components/Layout";
import pdf from "./components/cv.pdf";

import { Link } from "react-router-dom";

const LinkElement = (props) => {
  return (
    <Link className="text-gray-700 font-bold" to={props.path}>
      {props.text}
    </Link>
  );
};

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
        <div className="w-full flex justify-center text-center">
          <h3 className="mt-5 inline-block w-5/6">
            Head to{" "}
            <LinkElement
              text="Bridge Response calculator"
              path="/bridgeresponse"
            />{" "}
            to check out my bridge response simulator for passing trains.
          </h3>
        </div>
        <a className="bg-gray-700 text-white p-3 mt-20 rounded-md" href={pdf}>
          Download CV
        </a>
      </div>
    </Layout>
  );
};

export default Startpage;
