import React from "react";

const GreenButton = (props, onClickFunction) => {
  return <button onClick={onClickFunction}>{props}</button>;
};

export default GreenButton;
