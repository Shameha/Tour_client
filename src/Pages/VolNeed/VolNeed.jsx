// import React from 'react';

import {  useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import VolNeedRow from "./VolNeedRow";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";



const VolNeed = () => {
    const {user} = useContext(AuthContext);
    const [item,setItem] = useState([]);
    


    useEffect(() =>{
        fetch(`https://assignment11-topaz.vercel.app/involunteer/${user?.email}`)
         .then(res=>res.json())
         .then(data =>{
           console.log(data);
           setItem(data)
         });
       },[user?.email])

  const handleDelete = id =>{
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://assignment11-topaz.vercel.app/delete/${id}`,
      {
         method:'DELETE',
    
      }
      
      )
      .then(res=>res.json())
      .then(data=>{
        // console.log(data);
        if(data.deleteCount>0){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
        }
      })
      }
            
          });
      }

    return (
        <div>
          <Helmet><title>UnityServe | Need</title></Helmet>
            <h1>{item.length}</h1>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        item.map(p => <VolNeedRow
        key={p._id}
        p={p}
        handleDelete={handleDelete}
        ></VolNeedRow>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default VolNeed;