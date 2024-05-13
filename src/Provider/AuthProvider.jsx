// import React from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import app from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();



const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading,setLoading] = useState(true);


const creatUser = (email,password) =>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const updateUseprofile=(name,image) =>{
    return updateProfile(auth.currentUser, {
         displayName:name, 
         photoURL:image
       })
 
 }
 const googleLogin = () =>{
    signInWithPopup(auth,provider)
    .then((result) => {
      const user = result.user;
    toast.success('login succssfully',user);
  console.log(user);

    }).catch((error) => {
    toast.error(error.massage)
    console.error(error);
    
    <ToastContainer />

    });
}

const signIn = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}

const logOut = () =>{
    setLoading(true);
    return signOut(auth);
}

useEffect(() =>{
const unsubscribe = onAuthStateChanged(auth,currentUser=>{
   const userEmail = currentUser?.email || user?.email;
   const loggedUser = {email: userEmail};
    setUser(currentUser);
    console.log("current user",currentUser)
    setLoading(false)
    if(currentUser){
   
     axios.post('http://localhost:5000/jwt',loggedUser,{withCredentials:true})
     .then(res =>{
        console.log('token response',res.data);
     })
    }
    else{
     axios.post('http://localhost:5000/logout',loggedUser,{
        withCredentials:true
     })
     .then(res=>{
        console.log(res.data);
     })
    }

});
return()=>{
    return unsubscribe();
}

},[])

const authInfo = {
user,
loading,
creatUser,
updateUseprofile,
signIn,
googleLogin,
logOut

}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;