// import React from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/login-form.gif"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {
    const {creatUser,updateUseprofile} = useContext(AuthContext)
    const handlSignUp = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const image = form.get('image');

        console.log(email,name,password,image);
   
        if (password.length < 6) {
            toast.warn("Your password needs a minimum of six characters")
          //  console.log("Your password needs a minimum of four characters")
          } else if (password.search(/[a-z]/) < 0) {
            toast.warn("Your password needs a lower case letter")
            // toast.warn("Your password needs a lower case letter")
          } else if(password.search(/[A-Z]/) < 0) {
            toast.warn("Your password needs an uppser case letter")
            // toast.warn("Your password needs an uppser case letter")
          } else  if (password.search(/[0-9]/) < 0) {
            toast.warn("Your password needs a number")
            // toast.warn("Your password needs a number")
          } else {
            toast.success("Registered success fully")
          }
   
       
        creatUser(email,password)
        .then(result =>{
          updateUseprofile(name,image)
          
          .then(()=>{

            console.log("Updation complete",result.user);
            
            toast.success("Register success");
            // navigate(location?.state?location.state:'/')
            // navigate(location?.state?location.state: '/');

            
          })
        })
        .catch(error =>{
          console.error(error)
        })
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <div className=" w-1/2 mr-12">
        <img src={img} alt="" />  
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

        {/* <Helmet><title>Bella thorn| Register</title></Helmet> */}
      <h1 className="text-3xl my-10 text-center">Please Register</h1>
       <form onSubmit={handlSignUp} className="card-body  mx-auto md:w-3/4 lg:w-1/2">


      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Photo url</span>
        </label>
        <input type="text" placeholder="Photo" name="image" className="input input-bordered" required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="email" placeholder="email" name="email" className="input input-bordered" required />
      </div>
      <div className="relative">
<div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input type={(open === false)? "password":"text"}placeholder="password" name="password" className="input input-bordered" required />
        <div className="text-xl absolute top-10 right-5">
       {/* {
        (open === false)?<FaEyeSlash onClick={toggle} />:<IoEyeSharp onClick={toggle}  />
       }  */}
       
       
        
       </div>
       
        <label className="label">
          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
        </label>
      
      
    </div>
</div>
      <div className="form-control mt-6">
        <button className="btn btn-primary">Register</button>
      </div>
    </form>
    <p className="text-center mt-4 mb-4">Already have an accout?<Link className="text-green-800 font-bold" to="/login">Login</Link></p>
    <ToastContainer />
     </div>
     </div>
     </div>



    );
};

export default SignUp;