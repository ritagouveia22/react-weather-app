import React from "react";

import "./Header.css"

export default function Header() {
    return(
        <div className="Header">
          <div className="row">
            <div className="col-6">
              <h1 className="city">Lisbon</h1>
              <ul>
                <li>
                  <small>
                    Last updated at: Saturday Dec 27, 19:00
                  </small>
                </li>
                <li>
                  "Few Clouds"
                </li>
              </ul>
            </div>
            <div className="col-6">
              <p>
                <span
                className="current-temperature">
                10
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