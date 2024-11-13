import React from "react";
import { sharedButtonStyles } from "../Navbar";

const DarkButton = ({ innerText, additionalSytles }) => {
  return (
    <div
      className={`${sharedButtonStyles} bg-custom-gradient shadow-md shadow-innerWhiteShadow ${additionalSytles}`}
    >
      {innerText}
    </div>
  );
};

export default DarkButton;
