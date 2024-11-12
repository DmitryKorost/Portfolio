import './slider.css';
import Learn1 from './imageProject/Learn1.jpg';
import Learn2 from './imageProject/Learn2.jpg';
import LearnCod1 from './imageProject/LearnCod1.jpg';
import LearnCod2 from './imageProject/LearnCod2.jpg';
import LearnCod3 from './imageProject/LearnCod3.jpg';

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const images = [Learn1, Learn2, LearnCod1, LearnCod2, LearnCod3];

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Zoom {...zoomOutProperties}>
        {images.map((each, index) => (
          <img key={index} style={{ height: "100%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function SimpleSliderLearn() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default SimpleSliderLearn;