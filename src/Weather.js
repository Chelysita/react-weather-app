import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import drop3 from "./drop3.png";
import wind from "./wind.png";
import axios from "axios";
export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(Math.round(response.data.main.temp));
    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <div className="weatherApp container-fluid">
          <div
            className="container-fluid text-center mt-5 mb-3"
            mclass="mx-auto"
          >
            <form id="form">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Enter a city"
                    id="city-NewInput"
                    autocomplete="off"
                    autofocus="on"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    className="form-control btn btn-primary"
                    value="Search"
                  />
                </div>
              </div>
            </form>
            <br />
            <h1>Boston</h1>
            <h4>Last updated: Monday 13:35</h4>
          </div>

          <div className="container-fluid text-center">
            <div className="row container-fluid">
              <div className="col align-self-center container-fluid">
                <img src={drop3} width="80%" alt="drop-icon" />
                <div className="humidityIcon">
                  <span id="humidity"></span>%
                </div>
              </div>
              <div className="col container-fluid">
                <div
                  className="forecast p-2 container-fluid"
                  id="weatherDescription"
                ></div>
                <img className="forecastIcon" width="50%" id="icon" />

                <div className="forecast p-2 container-fluid">
                  <span id="temperature">{temperature} °F</span>
                  <span className="unitStyle"></span>
                </div>
              </div>
              <div className="col align-self-center">
                <img
                  className="forecastIcon"
                  src={wind}
                  width="80%"
                  alt="wind-icon"
                />
                <div className="windSpeed">
                  <span id="wind"></span> mph
                </div>
              </div>
            </div>
          </div>
          <div className="container text-center">
            <div className="row align-items-center">
              <div className="col">One of three columns</div>
              <div className="col">One of three columns</div>
              <div className="col">One of three columns</div>
              <div className="col">One of four columns</div>
              <div className="col">One of five columns</div>
            </div>
          </div>
          <footer className="App-footer text-center">
            <a
              className="App-link"
              href="https://github.com/Chelysita/react-weather-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source code
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=cdc6f40eaa51d2e0ae19d310a7a3769c&units=metric`;
    axios.get(url).then(handleResponse);
  }
}
