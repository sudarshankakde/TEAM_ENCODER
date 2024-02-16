// Navbar.js

import React, {  } from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {


  return (
    <nav className="max-w-screen  bg-slate-600 text-gray-300  flex flex-row items-center justify-between px-5 h-16 ">
      <Link to="/" className="logo">
        <img src={logo} alt="" className="  h-16 w-16" />
      </Link>
   
      <div
        className={`flex flex-row gap-5  text-lg`}
      >
        <Link to="/" className="hover:text-white">
          Home
        </Link>
        <Link to="/courses" className="hover:text-white">
          Courses
        </Link>
        <Link to="/login" className="hover:text-white">
          Log In
        </Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
