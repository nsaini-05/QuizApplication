import React from "react";

import Option from "./Option/Option";
import "../../css/options.css";
const Options = ({ options }) => {
  return (
    <div className="options-container">
      {options.map((option, index) => (
        <Option option={option} key={option._id} />
      ))}
    </div>
  );
};

export default Options;
