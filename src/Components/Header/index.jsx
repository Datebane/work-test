import React, { Component } from "react";
import Menu from "./Menu";
import CarouselBox from "./../Header/CarouselBox/CarouselBox";
import "./../Header/style.css";

  const Header = () =>{
    return (
      <>
        <Menu />
        <CarouselBox />
      </>
    );
  }

export default Header;