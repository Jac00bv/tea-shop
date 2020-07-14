import React from "react";
import buttonStyles from "../scss/header.module.scss";

const GreenButton = (props) => {
  console.log(props);
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
