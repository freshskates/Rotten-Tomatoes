import React from "react";
import "./styles/loading.css";
function Loading() {
  return (
    <div className="loader__container">
      <span className="loader">
        <span className="loader_inner"></span>
      </span>
    </div>
  );
}

export default Loading;
