// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import VolCard from "../VolCard/VolCard";

const Home = () => {
  const vol = useLoaderData();
    return (
        <div>
      <div className="mb-2">
         <Banner></Banner>
           </div>
           <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 gap-5">
          {
            vol.slice(0,6).map(volunteer=><VolCard key={volunteer._id}
                volunteer={volunteer}>

            </VolCard>)
           }
            
            </div> 
            <div className="justify-center py-10 px-10">
            <Link to='/need'><button className="btn btn-secondary">Secondary</button></Link>
            </div>
        </div>
    );
};

export default Home;