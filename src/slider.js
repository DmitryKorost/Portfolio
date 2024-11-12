import './slider.css';
import Simple1 from './imageProject/Simple1.jpg';
import Simple2 from './imageProject/Simple2.jpg';
import Simple3 from './imageProject/Simple3.jpg';
import Learn1 from './imageProject/Learn1.jpg';
import Learn2 from './imageProject/Learn2.jpg';
import Calkulator from './imageProject/Calkulator.jpg';

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const images = [Simple1, Simple2, Simple3, Learn1, Learn2, Calkulator];

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
          <img key={index} style={{ height: "70%" }} src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function SimpleSlider() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default SimpleSlider;