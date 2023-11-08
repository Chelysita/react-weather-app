import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div className="forecast p-2 container-fluid">
        <span className="unit">
          {Math.round(props.celsius)} °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="forecast p-2 container-fluid">
        <span className="unit">
          {Math.round(fahrenheit)}{" "}
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          | F
        </span>
      </div>
    );
  }
}
