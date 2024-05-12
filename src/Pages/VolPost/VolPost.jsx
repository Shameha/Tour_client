// import React from 'react';

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const VolPost = () => {
    const{user} = useContext(AuthContext);
    const [vol,setVol] = useState([]); 
    const url = `http://localhost:5000/beVolunteer?email1=${user.email}`;
    useEffect( ()=>{
 fetch(url)
 .then(res => res.json())
 .then(data => setVol(data))
    },[])


    return (
        <div>
            <h2> your booking:{vol.length}</h2>
        </div>
    );
};

export default VolPost;