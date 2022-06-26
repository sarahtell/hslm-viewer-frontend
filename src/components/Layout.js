import React from "react";
import NavBar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Layout = (props) => {
  return (
    <div className="flex flex-col bg-white text-center items-center h-screen md:overflow-y-scroll">
      <NavBar />
        {props.children}

        <div className="flex bg-gray-700 justify-center w-full">
          <a className="mt-2" href="https://www.linkedin.com/in/sarah-tell-90/">
            <FontAwesomeIcon size={"2x"} icon={faLinkedinIn} color="white" />
          </a>
        </div>
    </div>
  );
};

export default Layout;
