import React, { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: "Monday 8:00 PM",
      icon: `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png`,
      conditions: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="date">{weatherData.date}</div>
        <img src={weatherData.icon} alt={weatherData.conditions} />
        <div className="conditions">
          <p>{weatherData.conditions}</p>
        </div>
        <h1>Denver</h1>
        <h2>
          <span className="high">{weatherData.temperature}</span>
          <span className="degree">°</span>
        </h2>
        <div className="feels-like">
          <strong>Feels Like </strong>
          {weatherData.feelsLike}°
        </div>
        <div className="weather-grid">
          <div className="humidity">
            <strong>Humidity </strong>
            {weatherData.humidity}%
          </div>
          <div className="wind-speed">
            <strong>Wind Speed </strong>
            {weatherData.windSpeed} mph
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f447fe69101c60eaf9ebct1443fc07bo";
    let city = "Denver";
    let units = "imperial";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
