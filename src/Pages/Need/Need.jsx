// import React from 'react';

import {  useLoaderData } from "react-router-dom";
import VolCard from "../VolCard/VolCard";

const Need = () => {
    const vol = useLoaderData();
    return (
        <div>
           <h1>volenteear:{vol.length}</h1>
          <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5">
          {
            vol.map(volunteer=><VolCard key={volunteer._id}
                volunteer={volunteer}>

            </VolCard>)
           }
            
            </div> 
           
        </div>
    );
};

export default Need;