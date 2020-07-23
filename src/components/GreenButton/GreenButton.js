import React from "react";
import buttonStyles from "../Layout/Header/header.module.scss";

const GreenButton = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.action}
      formAction={props.formAction}
      className={buttonStyles.greenButton}
    >
      {props.children}
    </button>
  );
};

export default GreenButton;
