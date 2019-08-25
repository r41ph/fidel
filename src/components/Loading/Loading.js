import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="f-loading">
      <span className="f-loading_circle"></span>
      <span className="f-loading_text">Loading</span>
    </div>
  );
};

export default Loading;
