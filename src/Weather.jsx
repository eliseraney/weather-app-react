import React, { useState } from "react";
import axios from "axios";
import moment from "moment/moment";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: moment.unix(response.data.time).format("dddd h:mm A"),
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
        <h1>{props.defaultCity}</h1>
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
    let units = "imperial";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
}
