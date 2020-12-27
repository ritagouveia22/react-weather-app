import React from "react";
import Sunrise from "./Sunrise"
import Sunset from "./Sunset"

import "./Details.css"

export default function Details() {
    return(
      <div className="Details">
        <div className="row mb-5">
          <div className="col-6">
            <i className="fas fa-cloud-sun icon"></i>
          </div>
          <div className="col-6 weather-details">
            <ul>
              <li>
                Humidity: 96%
              </li>
              <li>
                Wind: 10km/h
              </li>
              <li>
                <Sunrise />
              </li>
              <li>
                <Sunset />
              </li>
            </ul>
          </div>
        </div>
     </div>
    )
}