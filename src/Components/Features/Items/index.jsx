import React from "react";
import "./../Items/style.css";
import { FaBuffer } from "react-icons/fa"; //romb
import { CiMobile3 } from "react-icons/ci"; //telephone
import { SlSpeech } from "react-icons/sl"; //message
import { TfiComments } from "react-icons/tfi"; //2message

const Items = () => {
  return (
    <div className="features-container">
      <div className="features-item">
        <div className="features-item-icon">
          <FaBuffer className="icon" />
        </div>
        <h5>ATTRACTIVE LAYOUT</h5>
        <p className="features-item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, odit!
          Non quas doloribus, ipsa modi unde veniam itaque ex totam?
        </p>
      </div>
      <div className="features-item">
        <div className="features-item-icon">
          <CiMobile3 className="icon" />
        </div>
        <h5>ATTRACTIVE LAYOUT</h5>
        <p className="features-item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, odit!
          Non quas doloribus, ipsa modi unde veniam itaque ex totam?
        </p>
      </div>
      <div className="features-item">
        <div className="features-item-icon">
          <SlSpeech className="icon" />
        </div>
        <h5>ATTRACTIVE LAYOUT</h5>
        <p className="features-item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, odit!
          Non quas doloribus, ipsa modi unde veniam itaque ex totam?
        </p>
      </div>
      <div className="features-item">
        <div className="features-item-icon">
          <TfiComments className="icon" />
        </div>
        <h5>ATTRACTIVE LAYOUT</h5>
        <p className="features-item-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, odit!
          Non quas doloribus, ipsa modi unde veniam itaque ex totam?
        </p>
      </div>
    </div>
  );
};

export default Items;
