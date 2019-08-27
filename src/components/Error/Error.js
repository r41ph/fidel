import React from "react";
import PropTypes from "prop-types";
import "./Error.scss";
import info from "../../assets/svg/info.svg";

const propTypes = {
  /**
   * The message to be displayed
   */
  message: PropTypes.string.isRequired
};

const Error = ({ message }) => {
  return (
    <span className="f-error">
      <img src={info} className="f-error_icon" alt="Error" />
      {message}
    </span>
  );
};

Error.propTypes = propTypes;

export default Error;
