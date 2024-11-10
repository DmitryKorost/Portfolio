import React from "react";
import Slider from "react-slick";
import './slider.css';
import Simple1 from './imageProject/Simple1.jpg';
import Simple2 from './imageProject/Simple2.jpg';
import Simple3 from './imageProject/Simple3.jpg';
import SimpleCod1 from './imageProject/SimpleCod1.jpg';
import SimpleCod2 from './imageProject/SimpleCod2.jpg';
import SimpleCod3 from './imageProject/SimpleCod3.jpg';
import SimpleCod4 from './imageProject/SimpleCod4.jpg';
import SimpleCod5 from './imageProject/SimpleCod5.jpg';
import SimpleCod6 from './imageProject/SimpleCod6.jpg';
import SimpleCod7 from './imageProject/SimpleCod7.jpg';
import SimpleCod8 from './imageProject/SimpleCod8.jpg';

export default function SimpleSliderSimple() {
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
        <img src={Simple1} className="image_slider"/>
        <h3>Внешний вид</h3>
      </div>
      <div>
        <img src={Simple2}  className="image_slider"/>
        <h3>Внешний вид</h3>
      </div>
      <div>
        <img src={Simple3}  className="image_slider"/>
        <h3>Внешний вид</h3>
      </div>
      <div>
        <img src={SimpleCod1}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod2}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod3}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod4}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod5}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod6}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod7}  className="image_slider"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={SimpleCod8}  className="image_slider"/>
        <h3>Код</h3>
      </div>
    </Slider>
  );
}