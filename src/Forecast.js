import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';


import "./Forecast.css"

export default function Forecast() {
    return (
        <div className="Forecast">
          <div className="row">
            <div className="col-sm">
              <p>Sun</p>
              <ReactAnimatedWeather
              icon='CLEAR_DAY'
              color= '#394867'
              size= {30}
              animate= {true}
              />
              <p><strong> 27ºC </strong>| 18ºC</p>
            </div>
            <div className="col-sm">
              <p>Mon</p>
              <ReactAnimatedWeather
              icon='PARTLY_CLOUDY_DAY'
              color= '#394867'
              size= {30}
              animate= {true}
              />
              <p><strong> 27ºC </strong>| 18ºC</p>
            </div>
            <div className="col-sm">
              <p>Tue</p>
              <ReactAnimatedWeather
              icon='CLOUDY'
              color= '#394867'
              size= {30}
              animate= {true}
              />
              <p><strong> 27ºC </strong>| 18ºC</p>
            </div>
            <div className="col-sm">
              <p>Wed</p>
              <ReactAnimatedWeather
              icon='RAIN'
              color= '#394867'
              size= {30}
              animate= {true}
              />
              <p><strong> 27ºC </strong>| 18ºC</p>
            </div>
            <div className="col-sm">
              <p>Thu</p>
              <ReactAnimatedWeather
              icon='SNOW'
              color= '#394867'
              size= {30}
              animate= {true}
              />
              <p><strong> 27ºC </strong>| 18ºC</p>
            </div>
            <div className="col-sm">
              <p>Fri</p>
              <ReactAnimatedWeather
              icon='WIND'
              color= '#394867'
              size= {30}
              animate= {true}
              />
              <p><strong> 27ºC </strong>| 18ºC</p>
            </div>
          </div>
        </div>
    )
}