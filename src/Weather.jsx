import React from "react";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="date">Last updated: {props.data.date}</div>
      <img src={props.data.icon} alt={props.data.conditions} />
      <div className="conditions">
        <p>{props.data.conditions}</p>
      </div>
      <h1>{props.data.city}</h1>
      <h2>
        <span className="high">{props.data.temperature}</span>
        <span className="degree">°</span>
      </h2>
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
