import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("imperial");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  if (unit === "imperial") {
    return (
      <div className="Temperature">
        <h2>
          <span className="high">{props.fahrenheit} </span>
          <span className="degree">
            °F |{" "}
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    let celsiusTemperature = Math.round(((props.fahrenheit - 32) * 5) / 9);

    return (
      <div className="Temperature">
        <h2>
          <span className="high">{celsiusTemperature} </span>
          <span className="degree">
            <a href="/" onClick={convertToFahrenheit}>
              °F{" "}
            </a>
            | °C
          </span>
        </h2>
      </div>
    );
  }
}
