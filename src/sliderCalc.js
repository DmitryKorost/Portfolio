import React from "react";
import Slider from "react-slick";
import './slider.css';
import Calkulator from './imageProject/Calkulator.jpg';
import CalkulatorCod1 from './imageProject/CalkulatorCod1.jpg';
import CalkulatorCod2 from './imageProject/CalkulatorCod2.jpg';
import CalkulatorCod3 from './imageProject/CalkulatorCod3.jpg';

export default function SimpleSliderCalc() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} >
      <div>
        <img src={Calkulator} className="image_slider"/>
        <h3>Внешний вид</h3>
      </div>
      <div>
        <img src={CalkulatorCod1}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={CalkulatorCod2}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={CalkulatorCod3}  className="image_slider"/>
        <h3>Код</h3>
      </div>
    </Slider>
  );
}