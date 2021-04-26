import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-gray-700 text-white flex justify-between">
        <Link className="p-3" to='/'>Sarah Tell</Link>
        <Link className="p-3" to='/bridgeresponse'>Projects</Link>
    </nav>
  );
};

export default NavBar;
