import React from "react";
import drop3 from "./drop3.png";
import wind from "./wind.png";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
}
