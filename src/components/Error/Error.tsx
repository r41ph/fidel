import React, { FunctionComponent } from "react";
import "./Error.scss";
import info from "../../assets/svg/info.svg";

interface ErrorProps {
  /**
   * The message to be displayed
   */
  message: string
}

const Error:FunctionComponent<ErrorProps> = ({ message }) => {
  return (
    <span className="f-error">
      <img src={info} className="f-error_icon" alt="Error" />
      {message}
    </span>
  );
};

export default Error;
