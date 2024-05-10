// import React from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/login-form.gif"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const SignUp = () => {
    const {creatUser} = useContext(AuthContext)
    const handlSignUp = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const name = form.get('name');
        const password = form.get('password');
        const photo = form.get('photo');

        console.log(email,name,password,photo);
    creatUser(email,password)
    .then(result =>{
        const user = result.user;
        console.log(user);
    })
    .catch(error => console.log(error))
    
    
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className=" w-1/2 mr-12">
           <img src={img} alt="" />  
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handlSignUp} className="card-body">
            <h1 className="text-2xl font-bold text-center">Sign up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo</span>
                </label>
                <input type="photo" name="photo" placeholder="PhotoUrl" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary"  type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center mt-4 mb-4">Already have an account? <Link className="text-green-600" to='/login'>Sing In</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default SignUp;