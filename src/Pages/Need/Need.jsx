// import React from 'react';

import {  useLoaderData } from "react-router-dom";
import VolCard from "../VolCard/VolCard";
import { PiDotsNineBold } from "react-icons/pi";
import { FaGripLines } from "react-icons/fa";
import Grid from "../Grid/Grid";
import { useState } from "react";

const Need = () => {
    const vol = useLoaderData();
    const [view,setView] = useState(false);
    const [search,setSearch] = useState("");
     const onChange = e =>{
        setSearch(e.target.value)
     }

     const onSearch = (searchItem) =>{
        console.log("search",searchItem);
     }
    return (
        <div>

<div className="join">
  <input value={search} onChange={onChange} className="input input-bordered join-item" placeholder="search"/>
  <button onClick={()=>onSearch(search)} className="btn join-item rounded-r-full">enter</button>
</div>
            
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
              vol
            . filter((volunteer)=>{
            const serchItem = search.toLowerCase() ;
            const title = volunteer.title.toLowerCase();
            return serchItem && title.includes(serchItem)
            })
              .map(volunteer=>

              
              <VolCard key={volunteer._id}
                  volunteer={volunteer}
                  onClick={()=>onSearch(volunteer.title)}
                  >
  
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