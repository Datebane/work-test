import React from "react";
import { useState } from "react";
import "./../Menu/style.css";
import { BiMenu } from "react-icons/bi";
import Burger from "../BurgerMenu/index.jsx";

const Menu = () => {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);
  const handleClick = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <div>
      <div className="header-menu">
        <p className="header-menu-logo">
          ba<em>zinger</em>
        </p>
        <div className="header-menu-button">
          <ul className="header-menu-button-list">
            <li>HOME</li>
            <li>FEATURES</li>
            <li>GALLERY</li>
            <li>VIDEO</li>
            <li>PRICES</li>
            <li>TESTIMONIALS</li>
            <li>DOWNLOAD</li>
            <li>CONTACT</li>
          </ul>
        </div>
        <div className="burger-menu" onClick={handleClick}>
          <BiMenu className="burger-icon" />
          {showBurgerMenu && <Burger />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
