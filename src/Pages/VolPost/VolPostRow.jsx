// import React from 'react';

// import Swal from "sweetalert2";

const VolPostRow = ({vols,handleDelete}) => {
    const {_id,title,category,photo,volunt,time,email}= vols;
    // const handleDelete = id =>{
//         const procced = confirm( Swal.fire({
//             title: "Deleted!",
//             text: "Your file has been deleted.",
//             icon: "success"
//           }));
//           if(procced){
//   fetch(`https://assignment11-topaz.vercel.app/beVolunteer/${id}`,{
//     method:'DELETE',

//   })
//   .then(res => res.json())
//   .then(data => {
//     console.log(data);
//     if(data.deleteCount>0){
//         Swal.fire({
//           title: "Deleted!",
//           text: "Your file has been deleted.",
//           icon: "success"
//         });
//       }
//   })
//           }

//     }
    // }
    return (
        <>
         <tr>
        <th>
        <button onClick={()=>handleDelete(_id)} className="btn btn-sm btn-circle">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
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
          <button className="btn btn-ghost btn-xs">{email}</button>
        </th>
      </tr>    
        </>
    );
};

export default VolPostRow;