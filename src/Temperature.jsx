import React, { useState } from "react";

import "./Temperature.css";

export default function Temperature(props) {
  const [unit, setUnit] = useState("imperial");

  function convertToMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function convertToImperial(event) {
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
            <a href="/" onClick={convertToMetric}>
              °C
            </a>
          </span>
        </h2>
        <div className="feels-like">
          <strong>Feels Like </strong>
          {props.feelsLike}°
        </div>
        <div className="weather-grid">
          <div className="humidity">
            <strong>Humidity </strong>
            {props.humidity}%
          </div>
          <div className="wind-speed">
            <strong>Wind Speed </strong>
            {props.windSpeed} mph
          </div>
        </div>
      </div>
    );
  } else {
    let metricTemperature = Math.round(((props.fahrenheit - 32) * 5) / 9);
    let metricFeelsLike = Math.round(((props.feelsLike - 32) * 5) / 9);
    let metricWindSpeed = Math.round(props.windSpeed * 1.609);

    return (
      <div className="Temperature">
        <h2>
          <span className="high">{metricTemperature} </span>
          <span className="degree">
            <a href="/" onClick={convertToImperial}>
              °F{" "}
            </a>
            | °C
          </span>
        </h2>
        <div className="feels-like">
          <strong>Feels Like </strong>
          {metricFeelsLike}°
        </div>
        <div className="weather-grid">
          <div className="humidity">
            <strong>Humidity </strong>
            {props.humidity}%
          </div>
          <div className="wind-speed">
            <strong>Wind Speed </strong>
            {metricWindSpeed} km/h
          </div>
        </div>
      </div>
    );
  }
}
