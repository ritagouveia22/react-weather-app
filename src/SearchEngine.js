import React from "react";

import "./SearchEngine.css"

export default function SearchEngine() {
    return (
        <div className="SearchEngine">
          <form className="mb-3">
            <div className="row">
              <div className="col-8">
                <input
                  type="search"
                  placeholder="Search a city..."
                  className="form-control"
                  autoComplete="off">
                </input>
              </div>
              <div className="col-4">
                <input
                  type="submit"
                  value="Search"
                  className="btn btn-secondary btn-block w-100">
                </input>
                <button
                  type="button"
                  className="btn btn-outline-light btn-sm btn-block current-loc-btn">
                  📍 Current location
                </button>
              </div>
            </div>
          </form>
        </div>
    )
}