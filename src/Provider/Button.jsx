// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { FaGoogle } from "react-icons/fa6";

const Button = () => {
    const {googleLogin} = useContext(AuthContext);
    const handleSocial = socialProvider =>{
        socialProvider()
        .then(result =>{
            console.log(result.user);
            
        })
        .catch(error =>{console.error(error)})
    }
    
    return (
        <div>
             <button  onClick={()=>handleSocial(googleLogin)} className="btn text-center mt-2 bg-green-800 text-slate-200"> <FaGoogle /></button>
        </div>
    );
};

export default Button;