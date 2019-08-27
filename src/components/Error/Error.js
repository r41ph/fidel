import React from "react";
import "./Error.scss";
import info from "../../assets/svg/info.svg";

const Error = ({ message }) => {
  return (
    <span className="f-error">
      <img src={info} className="f-error_icon" alt="Error" />
      {message}
    </span>
  );
};

export default Error;
