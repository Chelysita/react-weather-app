import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="dayForecast">Friday</div>
          <div className="WeatherIcon">
            <WeatherIcon code="01d" size={36} />
          </div>
          <div className="forecastTemp">
            <span className="dayForecast-max">25</span>
            <span className="dayForecast-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
