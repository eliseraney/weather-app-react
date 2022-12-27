import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <h2>
        <span className="high">50 </span>
        <span className="degree">°F</span>
      </h2>
    </div>
  );
}
