import React from "react";
import FeaturesTitle from "./Title/index";
import Items from "./Items/index"
import "./style.css";

const Features = () => {
  return (
    <>
      <FeaturesTitle />
      <Items/>
      <div className="line"></div>
    </>
  );
};

export default Features;
