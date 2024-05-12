// import React from 'react';

import {  useLoaderData } from "react-router-dom";
import VolCard from "../VolCard/VolCard";
import { PiDotsNineBold } from "react-icons/pi";
import { FaGripLines } from "react-icons/fa";
import Grid from "../Grid/Grid";
import { useState } from "react";

const Need = () => {
    const vol = useLoaderData();
    const [view,setView] = useState(false)
    return (
        <div>
            
            <div className=" flex gap-5 justify-center">
            {
                 view === true ? <button onClick={()=>setView(false)} className="bg-slate-400 p-3 rounded btn"><PiDotsNineBold /></button>:<button onClick={()=>setView(true)} className="bg-slate-400 p-3 rounded btn"><FaGripLines /></button>

            }

            </div>
           <h1>volenteear:{vol.length}</h1>

           {
            view === true ? 
            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5">
            {
              vol.map(volunteer=><VolCard key={volunteer._id}
                  volunteer={volunteer}>
  
              </VolCard>)
             }
              
              </div>  : 
          <div className=" ">
          {
            vol.map(volunteer=><Grid key={volunteer._id}
                volunteer={volunteer}></Grid>)
           }
            
            </div> 
           }

           
        </div>
    );
};

export default Need;