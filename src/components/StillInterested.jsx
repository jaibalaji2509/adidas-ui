import React from "react";
import Card from "./Card";
import "./StillInterested.css";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
export default function StillInterested() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-color-si container-fluid clearfix">
      <div className="dfc">
        <div className="heading-si">STILL INTERESTED ?</div>
        <div>
          <div className="dfc SW">
            <Slider {...settings}>
              <Card index={1} />
              <Card index={2} />
              <Card index={3} />
              <Card index={4} />
              <Card index={5} />
              <Card index={6} />
              <Card index={7} />
              <Card index={8} />
              <Card index={9} />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
