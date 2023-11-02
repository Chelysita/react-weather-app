import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";
import drop3 from "./drop3.png";
import wind from "./wind.png";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  if (weatherData.ready) {
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
            <h1>{weatherData.city}</h1>
            <h4>
              <FormattedDate date={weatherData.date} />
            </h4>
          </div>

          <div className="container-fluid text-center">
            <div className="row container-fluid">
              <div className="col align-self-center container-fluid">
                <img src={drop3} width="80%" alt="drop-icon" />
                <div className="humidityIcon">
                  <span id="humidity">{weatherData.humidity}</span>%
                </div>
              </div>
              <div className="col container-fluid">
                <div
                  className="forecast p-2 container-fluid"
                  id="weatherDescription"
                >
                  {weatherData.description}
                </div>
                <img
                  src={weatherData.icon}
                  className="forecastIcon"
                  width="50%"
                  id="icon"
                  alt="Description Icon"
                />

                <div className="forecast p-2 container-fluid">
                  <span id="temperature">
                    {Math.round(weatherData.temperature)} °C
                  </span>
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
                  <span id="wind">{weatherData.wind}</span> mph
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
    let apiKey = "cdc6f40eaa51d2e0ae19d310a7a3769c";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
}
