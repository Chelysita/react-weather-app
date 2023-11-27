import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="weatherForecast">
        <div className="row">
          <div className="col">
            <div className="dayForecast">{forecast[0].dt}</div>
            <div className="WeatherIcon">
              <WeatherIcon code="01d" size={36} />
            </div>
            <div className="forecastTemp">
              <span className="dayForecast-max">{forecast[0].temp.max}°</span>
              <span className="dayForecast-min">{forecast[0].temp.min}°</span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=cdc6f40eaa51d2e0ae19d310a7a3769c&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
