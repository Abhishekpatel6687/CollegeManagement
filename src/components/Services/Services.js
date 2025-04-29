import React from "react";
import "./Services.css";
import {data} from '../../data/servicesData'

const Services = () => {
  return (
    <div className="compus">
      <div className="compus-data">
        <h1>Campus Infrastructure</h1>
      </div>
      <div className="compus-list">
        {data.map((data) => (
          <div key={data.id}>
            <div className="list-item">
              <img src={data.image} alt="data_img" />
              <h1>{data.name}</h1>
              <p>{data.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Services;
