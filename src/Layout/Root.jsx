// import React from 'react';

import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
    return (
        <div className="mx-auto font-poppins">
            <Navbar></Navbar>
          <Outlet></Outlet> 
          <Footer></Footer>       
        </div>
    );
};

export default Root;