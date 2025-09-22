import React from "react";
import drop3 from "./drop3.png";
import wind from "./wind.png";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  console.log(props.data);
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
            <div className="WeatherIcon">
              <img src={props.data.icon} alt="weather-icon" size={52} />
            </div>

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
    </div>
  );
}
