// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const details = useLoaderData()
    const{_id,title,description,location,time,category,photo} = details
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{title}</h1>
            <h1 className="text-2xl font-bold">{category}</h1>
            <p className="py-6">{description}</p>
            <div>
                <p>{location}</p>
                <p>{time}</p>
            </div>
            <Link to={`/check/${_id}`}><button className="btn btn-secondary">Be a Volunteer</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Details;