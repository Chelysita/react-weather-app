import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature,
      humidity: response.data.temperature.humidity,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,

      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function search() {
    let apiKey = "e1054aod00e03d00aeectb39af13a2bb";

    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChangeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="weatherApp container-fluid">
        <div className="container-fluid text-center mt-5 mb-3" mclass="mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter a city"
                  autocomplete="off"
                  autofocus="on"
                  onChange={handleChangeCity}
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
          <WeatherInfo data={weatherData} />
          <WeatherForecast coordinates={weatherData.coordinates} />
          <footer className="text-center mt-5 ">
            <span>This project was coded by </span>
            <a
              className="font-weight-lighter text-decoration-none"
              href="https://lighthearted-eclair-dbe26d.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Araceli Medina
            </a>
            <span> and is </span>
            <a
              className="font-weight-lighter text-decoration-none"
              href="https://github.com/Chelysita/react-weather-app.git"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source on GitHub
            </a>
            <span> and </span>
            <a
              className="font-weight-lighter text-decoration-none"
              href="https://steady-griffin-9f60d9.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </footer>
        </div>
      </div>
    );
  } else {
    search();
  }
}
