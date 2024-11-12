import React from "react";
import Slider from "react-slick";
import './slider.css';
import Simple1 from './imageProject/Simple1.jpg';
import Simple2 from './imageProject/Simple2.jpg';
import Simple3 from './imageProject/Simple3.jpg';
import Learn1 from './imageProject/Learn1.jpg';
import Learn2 from './imageProject/Learn2.jpg';
import Calkulator from './imageProject/Calkulator.jpg';

export default function SimpleSlider() {
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
        <img src={Simple1} className="image_slider" alt ="not image"/>
        <h3>Простой стартовый шаблон</h3>
      </div>
      <div>
        <img src={Simple2}  className="image_slider" alt ="not image"/>
        <h3>Простой стартовый шаблон</h3>
      </div>
      <div>
        <img src={Simple3}  className="image_slider" alt ="not image"/>
        <h3>Простой стартовый шаблон</h3>
      </div>
      <div>
        <img src={Learn1}  className="image_slider" alt ="not image"/>
        <h3>Научится учится</h3>
      </div>
      <div>
        <img src={Learn2}  className="image_slider" alt ="not image"/>
        <h3>Научится учится</h3>
      </div>
      <div>
        <img src={Calkulator}  className="image_slider" alt ="not image"/>
        <h3>Калькулятор</h3>
      </div>
    </Slider>
  );
}
