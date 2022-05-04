import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-700 text-white flex justify-between w-full">
      <Link className="p-3 whitespace-nowrap md:mx-20" to="/">
        Sarah Tell
      </Link>
      <div className="flex items-center justify-between">
        <Link className="p-3 whitespace-nowrap md:mx-20" to="/bridgeresponse">
          Bridge Response calculator
        </Link>
        <a
          className="p-3 whitespace-nowrap md:mx-20 underline"
          href="https://pokemon-remotion.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pokemon fight
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
