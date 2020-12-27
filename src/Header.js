import React, { useState } from "react";
import axios from 'axios';

import "./Header.css"

export default function Header() {

  let [city, setCity] = useState("Lisbon")
  let [temp, setTemp] = useState(null)
  let [dayOfWeek, setDayOfWeek] = useState(null)
  let [month, setMonth] = useState(null)
  let [day, setDay] = useState(null)
  let [hours, setHours] = useState(null)
  let [minutes, setMinutes] = useState(null)
  let [description, setDescription] = useState(null)

  function handleresponse(response) {
   setCity(response.data.name)
   setTemp(Math.round(response.data.main.temp))
   setDescription((response.data.weather[0].description).charAt(0).toUpperCase() + (response.data.weather[0].description).slice(1))
   let weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
   let dayOfWeek = weekDays[(new Date(response.data.dt * 1000)).getDay()]
   setDayOfWeek(dayOfWeek)
   let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
   let month = months[(new Date(response.data.dt * 1000)).getMonth()]
   setMonth(month)
   let day = (new Date(response.data.dt * 1000).getDate())
   setDay(day)
   let hours = (new Date(response.data.dt * 1000)).getHours()
    if (hours < 10) {
     hours = `0${hours}`
    }
   setHours(hours)
   let minutes = (new Date(response.data.dt * 1000)).getMinutes()
    if (minutes < 10) {
     minutes = `0${minutes}`
    }
    setMinutes(minutes)

   console.log(response.data.dt * 1000)
  }

  let apiKey= "05d59b97163becec12a0f8000856ca3e"
  let units="metric"
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

  axios.get(apiUrl).then(handleresponse)

    return(
        <div className="Header">
          <div className="row">
            <div className="col-6">
              <h1 className="city">{city}</h1>
              <ul>
                <li>
                  <small>
                    Last updated at: {dayOfWeek} {month} {day}, {hours}:{minutes}
                  </small>
                </li>
                <li>
                  <i className="fas fa-angle-double-left"></i> {description} <i className="fas fa-angle-double-right"></i>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <p>
                <span
                className="current-temperature">
                {temp}
                </span>
                <span className="units">
                  <a href="/" className="active">ºC</a> | <a href="/">ºF</a>
                </span>
              </p>
            </div>
          </div>
        </div>
    )
}