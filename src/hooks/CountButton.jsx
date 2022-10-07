import React from "react";

const CountButton = ({ handleClick, children }) => {
  console.log("CountButton", children);
  return <button onClick={handleClick}>{children}</button>;
};

export default CountButton;
