// import React from 'react';
import  { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";


const AddVol = () => {
  const {user} = useContext(AuthContext);
  const [date,setDate] = useState();
  console.log(date);
 const handleAdd = e =>{
  e.preventDefault();
const form = e.target;
const title = form.title.value;
const description = form.description.value;
const volunt = form.volunt.value;
const location = form.location.value;
const time = form.time.value;
const category = form.category.value;
const name = form.name.value;
const email = form.email.value;
const photo = form.photo.value;
const newVol = {title,description,volunt,location,time,category,name,email,photo}
console.log(newVol);
//send data to server

fetch('http://localhost:5000/volunteer',{
  method:'POST',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(newVol)

})
.then(res=> res.json())
.then(data =>{
  console.log(data);
  if(data.insertedId){
    Swal.fire({
      title: 'success',
      text: 'User added successfully',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
})


 }


    return (
        <div className="min-h-screen">
          <Helmet><title>UnityServe | Add vol</title></Helmet>
        <h1 className="text-3xl font-bold text-center mt-2">Add Volunteer Post</h1>
        <p className="text-sm text-center mt-2" >A diverse range of places, including natural wonders, cultural and historical landmarks, architectural marvels, recreational facilities, and entertainment venues.</p>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        
      <form onSubmit={handleAdd}  className="card-body w-auto">
        {/* tourists spots,country nname
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">tourists spot name</span>
          </label>
          <input type="text" placeholder="tourists_spot" name="spot" className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">country Name</span>
          </label>
          <input type="text" placeholder="country_Name" name="country" className="input input-bordered" required />
        </div> */}
       {/* </div> */}
       {/* location,short discrition */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control  md:w-1/2">
          <label className="label">
            <span className="label-text">Post Title</span>
          </label>
          <input type="text" placeholder="Post Title" name="title" className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Description" name="description" className="input input-bordered" required />
        </div>
       </div>
       {/* no of volunteer,location */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">No. of volunteers needed</span>
          </label>
          <input type="number" placeholder="No. of volunteers needed" name="volunt" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" placeholder="Location" name="location" className="input input-bordered" required />
        </div>
       </div>
       {/* time,catagory */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text"> Deadline</span>
          </label>
          <input type="date" onChange={e=> setDate(e.target.value)} placeholder=" Deadline =" name="time" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Category" name="category" className="input input-bordered" required />
        </div>
       </div>
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            {/* name and email */}
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" value={user?.email} defaultValue name="email" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name="name" value={user?.displayName} defaultValue className="input input-bordered" required />
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Add Post" className="btn btn-block bg-purple-400" />
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default AddVol;