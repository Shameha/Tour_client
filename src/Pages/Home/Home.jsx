// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import VolCard from "../VolCard/VolCard";
import Extra from "../ExtraSection/Extra";
import ExtraSection from "../ExtraSection/ExtraSection";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const vol = useLoaderData();
    return (
        <div>
              <Helmet><title>UnityServe | Home</title></Helmet>
      <div className="mb-2">
         <Banner></Banner>
           </div>

           <h1 className="text-center text-3xl font-bold mt-10">Volunteer Needs</h1>
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

            <div>
            
              <Extra></Extra>
            </div>
            <h1 className="test-center text-2xl font-bold mx-5">Volunteering where kindness grows and hearts overflow</h1>
            <div>

              <ExtraSection></ExtraSection>
            </div>
        </div>
    );
};

export default Home;