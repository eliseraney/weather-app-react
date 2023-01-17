import React, { useState } from "react";
import axios from "axios";
import moment from "moment/moment";

import Weather from "./Weather";
import Forecast from "./Forecast";

import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: moment.unix(response.data.time).format("dddd h:mm A"),
      icon: response.data.condition.icon,
      city: response.data.city,
      coordinates: response.data.coordinates,
      conditions: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      temperature: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      windSpeed: Math.round(response.data.wind.speed),
    });
  }

  function search() {
    const apiKey = "f447fe69101c60eaf9ebct1443fc07bo";
    let units = "imperial";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function findCurrentCity(position) {
    const apiKey = "f447fe69101c60eaf9ebct1443fc07bo";
    let units = "imperial";
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    const apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function handleCurrentCity(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(findCurrentCity);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <form className="Search" id="search-form" onSubmit={handleSubmit}>
          <input
            type="search"
            name="Search City"
            id="search-input"
            placeholder="SEARCH CITY"
            className="searchCity"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input id="submit-button" type="submit" value="Search" />
          <input
            id="current-city-button"
            type="submit"
            value="Current City"
            onClick={handleCurrentCity}
          />
        </form>
        <Weather data={weatherData} />
        <hr />
        <div className="ForecastGrid">
          <div className="row">
            <div className="col">
              <Forecast coordinates={weatherData.coordinates} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      search(),
      (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      )
    );
  }
}
