import React from "react";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="conditions">
        <p>Partly Cloudy</p>
      </div>
      <h1>Denver</h1>
      <h2>
        <span className="high">50</span>
        <span className="degree">°F</span>
      </h2>
      <div className="humidity">
        <strong>HUMIDITY </strong>8%
      </div>
      <div className="wind-speed">
        <strong>WIND SPEED </strong>19
      </div>
    </div>
  );
}
