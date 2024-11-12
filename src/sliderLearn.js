import Slider from "react-slick";
import './slider.css';
import Learn1 from './imageProject/Learn1.jpg';
import Learn2 from './imageProject/Learn2.jpg';
import LearnCod1 from './imageProject/LearnCod1.jpg';
import LearnCod2 from './imageProject/LearnCod2.jpg';
import LearnCod3 from './imageProject/LearnCod3.jpg';

export default function SimpleSliderLearn() {
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
        <img src={Learn1} className="image_slider" alt="not image"/>
        <h3>Внешний вид</h3>
      </div>
      <div>
        <img src={Learn2}  className="image_slider" alt="not image"/>
        <h3>Внешний вид</h3>
      </div>
      <div>
        <img src={LearnCod1}  className="image_slider" alt="not image"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={LearnCod2}  className="image_slider" alt="not image"/>
        <h3>Код</h3>
      </div>
      <div>
        <img src={LearnCod3}  className="image_slider" alt="not image"/>
        <h3>Код</h3>
      </div>
    </Slider>
  );
}
