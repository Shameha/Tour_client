// import React from 'react';
import { useContext } from "react";
import logo from "../../assets/istockphoto-931069122-612x612.jpg"

import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Theme from "../Theme/Theme";

const Navbar = () => {
  const {user,logOut} = useContext(AuthContext);
  const handleSignOut =()=>{
    logOut()
    .then()
    .catch()
    }

    const navLink = <>

    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/need">Need Volunteer</NavLink></li>
        {/* <li><NavLink to="/added">Add </NavLink></li> */}
      
        {/* <li><NavLink to="/list">My List</NavLink></li> */}
    
      </>
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
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
          <Theme></Theme> 
        <div className="navbar-end">
        <div className="tooltip mt-5" data-tip={user?.displayName||""}>
  
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
        <img alt="Tailwind CSS Navbar component" src={user?.photoURL||""} />
        </div>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[2] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a><Link to='/added'> Add Volunteer Post</Link></a></li>
        <li><a><Link to='/post'>Manage Request My Post</Link></a></li>
        <li><a><Link to='/vol'>Manage Need My Post</Link></a></li>
      </ul>
    </div>
 
</div>
        <div>
        {
  user ?<button onClick={handleSignOut} className="btn mt-5 ">Sign Out</button> :
    <Link to="/login"><button className="btn ">Login</button></Link>
}
        </div>
        </div>
      </div>
    );
};

export default Navbar;