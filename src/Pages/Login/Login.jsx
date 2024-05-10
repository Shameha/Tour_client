// import React from 'react';
import { Link } from "react-router-dom";
import img from "../../assets/login-form.gif"
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Button from "../../Provider/Button";
const Login = () => {
const {signIn} = useContext(AuthContext);


const handlLogin = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
      
          const password = form.get('password');
        console.log(email,password);

        signIn(email,password)
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
      <form onSubmit={handlLogin} className="card-body">
      <h1 className="text-2xl font-bold text-center">Login now!</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
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
      <p className="text-center mt-4 mb-4">New Here <Link className="text-green-600" to='/singup'>Sing up</Link> </p>
    <div className="px-20 mt-4 mb-4">
    <Button></Button>
    </div>
    </div>
  </div>
</div>
    );
};

export default Login;