// import React from 'react';

import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from 'sweetalert2'
import { Helmet } from "react-helmet-async";

const CheckOut = () => {
    const{user} = useContext(AuthContext)
    const volun = useLoaderData();
    // const[quantity,setQuantity] = useState(5);
    const{_id,title,description,volunt,location,time,category,name,email,photo,request}= volun;
    const handleVol = e=>{
        e.preventDefault();
        const form = e.target;
        const sugg = form.sugg.value;
        const status = form.status.value;
        const email1 = user?.email;
        const name1 = user?.email;
        const beVolunteers ={
         customerName:name,
         email,
         time,
         volun_id:_id,
         sugg,status,
         email1,
         name1,
         photo:photo,
         title:title,
         description:description,
         category:category,
         location:location,
         volunt:volunt
          

        }
        console.log(beVolunteers);

        fetch('https://assignment11-topaz.vercel.app/beVolunteer',{
            method: 'POST',
            headers:{
                'content-type' :'application/json'

            },
            body:JSON.stringify(beVolunteers)
        })
        .then(res=>res.json())
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
    // const handleDecrement = () =>{
    //   setQuantity(p => p-1 );
    // }

    let listing = <p className="font-bold text-center text-2xl">no records found</p>
    if(volunt.length>0){
      listing =  <input  type="submit" value="Request" className="btn btn-block bg-purple-400" />
      
    }
    return (
        <div className="min-h-screen">
          <Helmet><title>UnityServe | Check</title></Helmet>
        <h1 className="text-3xl font-bold text-center mt-2">Be a Volunteer</h1>
        {/* <p className="text-sm text-center mt-2" >A diverse range of places, including natural wonders, cultural and historical landmarks, architectural marvels, recreational facilities, and entertainment venues.</p> */}
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="card shrink-0 w-full  shadow-2xl bg-base-100">
        
      <form onSubmit={handleVol}  className="card-body w-auto">
        {/* tourists spots,country nname */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">Post Title</span>
          </label>
          <input type="text" defaultValue={title} className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" defaultValue={description} className="input input-bordered" required />
        </div>
       </div>
       {/* location,short discrition */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control  md:w-1/2">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input type="text" defaultValue={location} className="input input-bordered w-full" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input type="text" defaultValue={category} className="input input-bordered" required />
        </div>
       </div>
       {/* avarage cost,seasonality */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text"> No. of volunteers needed</span>
          </label>
          <input type="text" defaultValue={volunt} className="input input-bordered" required />
          {/* <div>{volunt}:{quantity}</div> */}
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Deadline</span>
          </label>
          <input type="text" defaultValue={time} className="input input-bordered" required />
        </div>
       </div>
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            {/* name and email */}
            <span className="label-text">Email</span>
          </label>
          <input type="email" defaultValue={email} className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" defaultValue={name} className="input input-bordered" required />
        </div>
       </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail</span>
          </label>
          <input type="text" defaultValue={photo} className="input input-bordered" required />
        </div>
          {/* organizer name and email */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            {/* name and email */}
            <span className="label-text">Volunteer Email</span>
          </label>
          <input type="email" placeholder="email" value={user?.email} defaultValue name="email1" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Volunteer Name</span>
          </label>
          <input type="text" placeholder="name" name="name1" value={user?.displayName} defaultValue className="input input-bordered" required />
        </div>
       </div>
       {/* travel tiime,visitors */}
       <div className="lg:flex md:flex grid gap-5">
       <div className=" form-control">
          <label className="label">
            <span className="label-text">Suggestion</span>
          </label>
          <input type="text" placeholder="Suggestion" name="sugg" className="input input-bordered" required />
        </div>
        <div className=" form-control">
          <label className="label">
            <span className="label-text">Status</span>
          </label>
          <input type="text" placeholder="Request"  name="status"  defaultValue={request} className="input input-bordered" required />
        </div>
       </div>
        <div className="form-control mt-6">
         
        {listing}
        </div>
      </form>
    </div>
  </div>
</div>
</div>
    );
};

export default CheckOut;