// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import VolPostRow from "./VolPostRow";
import Swal from "sweetalert2";

const VolPost = () => {
    const{user} = useContext(AuthContext);
    const [vol,setVol] = useState([]); 
    const url = `http://localhost:5000/beVolunteer?email1=${user.email}`;
    useEffect( ()=>{
 fetch(url,{
  credentials:'include'
 })
 .then(res => res.json())
 .then(data => setVol(data))
    },[])
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
            fetch(`http://localhost:5000/beVolunteer/${id}`,
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
            {/* <h2> your booking:{vol.length}</h2> */}
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
        vol.map(vols => <VolPostRow
        key={vols._id}
        vols={vols}
        handleDelete={handleDelete}
        ></VolPostRow>)
     }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default VolPost;