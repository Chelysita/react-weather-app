import React from "react";
import drop3 from "./drop3.png";
import wind from "./wind.png";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      {" "}
      <br />
      <h1>{props.data.city}</h1>
      <h4>
        <FormattedDate date={props.data.date} />
      </h4>
      <div className="container-fluid text-center">
        <div className="row container-fluid">
          <div className="col align-self-center container-fluid">
            <img src={drop3} width="80%" alt="drop-icon" />
            <div className="humidityIcon">
              <span id="humidity">{props.data.humidity}</span>%
            </div>
          </div>
          <div className="col container-fluid">
            <div
              className="forecast p-2 container-fluid"
              id="weatherDescription"
            >
              {props.data.description}
            </div>
            <WeatherIcon code={props.data.icon} />

            <WeatherTemperature celsius={props.data.temperature} />
          </div>
          <div className="col align-self-center">
            <img
              className="forecastIcon"
              src={wind}
              width="80%"
              alt="wind-icon"
            />
            <div className="windSpeed">
              <span id="wind">{Math.round(props.data.wind)}</span> mph
            </div>
          </div>
        </div>
      </div>
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
  );
}
