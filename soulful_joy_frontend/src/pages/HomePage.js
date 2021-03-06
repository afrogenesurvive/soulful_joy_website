import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import MainNavigation from '../components/Navigation/MainNavigation';
import { NavLink } from 'react-router-dom';

import "./HomePage.css"
import carousel_1 from "../assets/imgs/carousel_1.png";
import carousel_2 from "../assets/imgs/carousel_2.jpg";
import carousel_3 from "../assets/imgs/carousel_3.jpg";
import carousel_4 from "../assets/imgs/carousel_4.jpg";
import mobile_carousel_1 from "../assets/imgs/mobile_carousel_1.jpg";
import mobile_carousel_2 from "../assets/imgs/mobile_carousel_2.jpg";
import mobile_carousel_3 from "../assets/imgs/mobile_carousel_3.jpg";
import mobile_carousel_4 from "../assets/imgs/mobile_carousel_4.jpg";

const HomePage = (props) => {
  let location = props.location.pathname;

return (

  <div className="homePage_maindiv">
  <MainNavigation
    currentPage={location}
  />

  <Row className="homePageCarouselRow">

  <Carousel className="homePageCarousel" fade={true} controls={false}>

    <Carousel.Item>

      {props.mobile !== true && (
        <img
          className="mainPage_carousel_img d-block w-100"
          src={carousel_1}
          alt="3rd slide"
        />
      )}
      {props.mobile === true && (
        <img
          className="mainPage_carousel_img d-block w-100"
          src={mobile_carousel_1}
          alt="3rd slide"
        />
      )}

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
        <NavLink to="/retreat">
          <h1 className="carousel_caption_heading">The Experience</h1>
        </NavLink>

          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Soulful Joy A Special time and Place</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item className="homePageCarouselItem">

      {props.mobile !== true && (
        <img
          className="mainPage_carousel_img d-block w-100"
          src={carousel_2}
          alt="1st slide"
        />
      )}
      {props.mobile === true && (
        <img
          className="mainPage_carousel_img d-block w-100"
          src={mobile_carousel_2}
          alt="1st slide"
        />
      )}

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/team">
            <h1 className="carousel_caption_heading">The Team</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Meet  our Soulful Joy team that will be guiding you on this inspirational journey.</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item>

    {props.mobile !== true && (
      <img
        className="mainPage_carousel_img d-block w-100"
        src={carousel_3}
        alt="2nd slide"
      />
    )}
    {props.mobile === true && (
      <img
        className="mainPage_carousel_img d-block w-100"
        src={mobile_carousel_3}
        alt="2nd slide"
      />
    )}


      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
          <NavLink to="/path">
            <h1 className="carousel_caption_heading">Path</h1>
          </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>The 5 I's will help carve out your path to this amazing experience..</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>

    </Carousel.Item>

    <Carousel.Item>

    {props.mobile !== true && (
      <img
        className="mainPage_carousel_img d-block w-100"
        src={carousel_4}
        alt="4th slide"
      />
    )}
    {props.mobile === true && (
      <img
        className="mainPage_carousel_img d-block w-100"
        src={mobile_carousel_4}
        alt="4th slide"
      />
    )}

      <Carousel.Caption>
      <Row className="carousel_caption_row">
        <Col>
        <NavLink to="/socialMedia">
          <h1 className="carousel_caption_heading">Join the Joy</h1>
        </NavLink>
          <ul className="carousel_caption_list">
            <li  className="carousel_caption_listItem">
              <p>Join the Joy.</p>
            </li>
          </ul>
        </Col>
      </Row>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>

  </Row>
  </div>
)

}


export default HomePage;
