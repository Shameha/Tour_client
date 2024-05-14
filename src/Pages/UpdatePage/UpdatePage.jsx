// import React from 'react';

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdatePage = () => {
    const {id} = useParams();
console.log(id);

const[tour,setTour] = useState({});
useEffect(()=>{
fetch(`http://localhost:5000/update/${id}`)
.then(res=>res.json())
.then(data =>{
  setTour(data)
  console.log(data);
})
},[id])

const handleUpdate = (e) =>{
  e.preventDefault();
const form = e.target;
  const title = form.title.value;
  const volunt = form.volunt.value;
  const location = form.location.value;
  const description = form.description.value;
  const category = form.category.value;
 
  const time = form.time.value;
  
  const photo = form.photo.value;
  
const info = {
    title
    ,volunt,
    location,
    description,
    category,
    time,
    photo
}
fetch(`http://localhost:5000/updateTour/${id}`,{
  method:'PUT',
  headers:{
    'content-type':'application/json'
  },
  body:JSON.stringify(info)


})
.then(res =>res.json())
.then(data=>{
  console.log(data);
  if(data.modifiedCount > 0){
    Swal.fire({
      title: 'Success!',
      text: 'Added update',
      icon: 'success',
      confirmButtonText: 'Cool'
    })
  }
})

}
    return (
        <div className="min-h-screen">
          <Helmet><title>UnityServe | Update</title></Helmet>
        <h1 className="text-3xl font-bold text-center mt-2">Volunteer update</h1>
        <p className="text-sm text-center mt-2" >A diverse range of places, including natural wonders, cultural and historical landmarks, architectural marvels, recreational facilities, and entertainment venues.</p>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        
      <form onSubmit={handleUpdate} className="card-body w-auto">
        {/* tourists spots,country nname */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="Title" defaultValue={tour.title} name="title" className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">DeadLine</span>
          </label>
          <input type="date" placeholder="DeadLine" name="time"  className="input input-bordered" required />
        </div>
       </div>
       {/* location,short discrition */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control  md:w-1/2">
          <label className="label">
            <span className="label-text">location</span>
          </label>
          <input type="text" placeholder="location"  name="location" className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">short description</span>
          </label>
          <input type="text" placeholder="short description"  name="description" className="input input-bordered" required />
        </div>
       </div>
       {/* avarage cost,seasonality */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">No. of volunteer</span>
          </label>
          <input type="number" placeholder="average cost" name="volunt"  className="input input-bordered" required />
        </div>
       <div className=" form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" placeholder="Category" name="category"  className="input input-bordered" required />
        </div>
       </div>
       {/* travel tiime,visitors */}
       
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            {/* name and email */}
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={tour.email} className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={tour.name} className="input input-bordered" required />
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Photo" name="photo" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
        <input type="submit" value="Update tourist" className="btn btn-block bg-purple-400" />
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default UpdatePage;