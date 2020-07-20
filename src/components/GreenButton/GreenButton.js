import React from "react";
import buttonStyles from "../Layout/Header/header.module.scss";

const GreenButton = (props) => {
  return (
    <button
      type={props.type}
      formAction={props.formAction}
      className={buttonStyles.greenButton}
    >
      {props.children}
    </button>
  );
};

export default GreenButton;
