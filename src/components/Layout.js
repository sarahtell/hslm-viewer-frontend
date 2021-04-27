import React from "react";
import NavBar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="flex flex-col bg-white h-screen text-center">
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;
