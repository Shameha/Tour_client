// import React from 'react';

import { Link } from "react-router-dom";

const Grid = ({volunteer}) => {
    const{_id,title,volunt,category,photo,time} = volunteer
    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    <tbody>
      {/* row 1 */}
      <tr>
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
        {volunt}
          <br/>
          <span className="badge badge-ghost badge-sm">{time}</span>
        </td>
        <th>
        <Link to={`/detail/${_id}`}><button className="btn btn-secondary">View details</button></Link>
        </th>
      </tr>
      {/* row 2 */}
      
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Grid;