import React from "react";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-pink-300 flex justify-between">
        <Link className="p-5" to='/'>Home</Link>
        <Link className="p-5" to='/resume'>Resume</Link>
        <Link className="p-5" to='/bridgeresponse'>Project</Link>
    </nav>
  );
};

export default NavBar;
