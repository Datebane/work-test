import React from "react";
import "./../BurgerMenu/style.css"

function Burger() {
  return (
    <div className="burger">
      <ul className="header-burger-menu">
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
  );
}

export default Burger;
