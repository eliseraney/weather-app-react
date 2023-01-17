import React from "react";

import WeatherIcon from "./WeatherIcon.jsx";
import Temperature from "./Temperature.jsx";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="date">Last updated: {props.data.date}</div>
      <WeatherIcon code={props.data.icon} size="80" />
      <div className="conditions">
        <p>{props.data.conditions}</p>
      </div>
      <h1>{props.data.city}</h1>
      <Temperature
        fahrenheit={props.data.temperature}
        feelsLike={props.data.feelsLike}
        humidity={props.data.humidity}
        windSpeed={props.data.windSpeed}
      />
    </div>
  );
}
