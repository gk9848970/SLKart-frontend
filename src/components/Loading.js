import React from "react";
import ReactDOM from "react-dom";

import "../css/loading.css";

function Loading() {
  return (
    <div className="App1">
      <div class='loading'>
        <div class='loading__square'></div>
        <div class='loading__square'></div>
        <div class='loading__square'></div>
        <div class='loading__square'></div>
        <div class='loading__square'></div>
        <div class='loading__square'></div>
        <div class='loading__square'></div>
      </div>
    </div>
  );
}


export default Loading;