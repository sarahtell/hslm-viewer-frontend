import React from "react";
import NavBar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="bg-white h-screen">
      <NavBar />
      {props.children}
    </div>
  );
};

export default Layout;
