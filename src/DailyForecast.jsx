import React from "react";
import moment from "moment/moment";

import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  return (
    <div>
      <div className="day">{moment.unix(props.data.time).format("ddd")}</div>
      <WeatherIcon code={props.data.condition.icon} size="50" />
      <div className="temperature">
        <span className="high">
          {Math.round(props.data.temperature.maximum)}°
        </span>
        <span className="low">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
