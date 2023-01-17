import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Forecast.css";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyforecast, index) {
            return (
              <div className="col-md" key-={index}>
                <DailyForecast data={dailyforecast} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "f447fe69101c60eaf9ebct1443fc07bo";
    let units = "imperial";
    let lon = props.coordinates.longitude;
    let lat = props.coordinates.latitude;
    const apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);

    return null;
  }
}
