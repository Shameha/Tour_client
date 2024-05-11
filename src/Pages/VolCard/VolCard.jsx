// import React from 'react';
import { IoMdPeople } from "react-icons/io";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";


const VolCard = ({volunteer}) => {

    const{_id,title,volunt,category,photo,time} = volunteer
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{category}</p>
    <div className="flex gap-10">
    <div className="flex gap-2 justify-end">
    <IoMdPeople />
    <p>{volunt}</p>
    </div>
     <div className="flex gap-2">
     <IoTime />
     <p>{time}</p>
     </div>

    </div>
    <div className="card-actions">
    <Link to={`/detail/${_id}`}><button className="btn btn-secondary">View details</button></Link>
    </div>
  </div>
</div>
    );
};

export default VolCard;