import React from "react";

import WeatherIcon from "./WeatherIcon.jsx";
import Temperature from "./Temperature.jsx";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="date">Last updated: {props.data.date}</div>
      <WeatherIcon code={props.data.icon} />
      <div className="conditions">
        <p>{props.data.conditions}</p>
      </div>
      <h1>{props.data.city}</h1>
      <Temperature fahrenheit={props.data.temperature} />
      <div className="feels-like">
        <strong>Feels Like </strong>
        {props.data.feelsLike}°
      </div>
      <div className="weather-grid">
        <div className="humidity">
          <strong>Humidity </strong>
          {props.data.humidity}%
        </div>
        <div className="wind-speed">
          <strong>Wind Speed </strong>
          {props.data.windSpeed} mph
        </div>
      </div>
    </div>
  );
}
