import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecast-box pt-5">
      <div className="dayForecast">{day()}</div>
      <div className="WeatherIcon">
        <img src={props.data.condition.icon_url} alt="weather icon" size={36} />
      </div>
      <div className="forecastTemp">
        <span className="dayForecast-max">{maxTemperature()}</span>
        <span className="dayForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
