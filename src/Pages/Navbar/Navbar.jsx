// import React from 'react';
import { useContext } from "react";
import logo from "../../assets/istockphoto-931069122-612x612.jpg"

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const {user} = useContext(AuthContext);

    const navLink = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/volunteer">Need Volunteer</NavLink></li>
        {/* <li><NavLink to="/addedTour">Add Tourists Spot</NavLink></li> */}
      
        {/* <li><NavLink to="/list">My List</NavLink></li> */}
    
      </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <img src={logo} width={50} height={50} alt="" />
    <a className=" lg:text-xl md:text-sm text-sm font-bold ">UnityServe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLink}
          </ul>
        </div>

        <div className="navbar-end">
        <div className="tooltip mt-5" data-tip={user?.displayName||""}>
  
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL||""} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
 
</div>
        <Link to="/login"><button className="btn ">Login</button></Link>
        </div>
      </div>
    );
};

export default Navbar;