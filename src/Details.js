import React from "react";
import Sunrise from "./Sunrise"
import Sunset from "./Sunset"
import ReactAnimatedWeather from 'react-animated-weather';

import "./Details.css"

export default function Details() {
    return(
      <div className="Details">
        <div className="row mb-5">
          <div className="col-6">
            <ReactAnimatedWeather
              icon='PARTLY_CLOUDY_DAY'
              color='#394867'
              size= {150}
              animate= {true}
              />
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