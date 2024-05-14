// import React from 'react';

import { Link } from "react-router-dom";

const VolNeedRow = ({p,handleDelete}) => {
    const {_id,title,category,photo,volunt,time}= p;
    return (
        
           <tr>
        <th>
        {/* <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button> */}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={photo} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{title}</div>
              <div className="text-sm opacity-50">{category}</div>
            </div>
          </div>
        </td>
        <td>
          {time}
          <br/>
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>{volunt}</td>
        <th>
         <div className="lg:flex col-span-1 gap-5">
         <button onClick={()=>handleDelete(_id)} className="btn btn-success">Delete</button>
          <Link to={`/update/${_id}`}><button className="btn btn-warning">Update</button></Link> 
         </div>
        </th>
      </tr>   
        
    );
};

export default VolNeedRow;