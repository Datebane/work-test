import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./style.css";
import Slide1 from "../../../img/Slides/slide-1.avif";
import Slide2 from "../../../img/Slides/slide-2.jpg";
import Slide3 from "../../../img/Slides/slide-3.jpg";


export default class CarouselBox extends Component {
  render() {
    return (
      <>
        <Carousel className="header-carousel">
          <Carousel.Item>
            <img className="d-block w-100" src={Slide1} alt="telephone" />
            <Carousel.Caption>
              <h3>Telephone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                et.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide2} alt="telephone" />
            <Carousel.Caption>
              <h3>Telephone2</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                et.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={Slide3} alt="telephone" />
            <Carousel.Caption>
              <h3>Telephone3</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
                et.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

