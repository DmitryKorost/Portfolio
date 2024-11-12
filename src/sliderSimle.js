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

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const images = [Simple1, Simple2, Simple3, SimpleCod1, SimpleCod2, SimpleCod3, SimpleCod4, SimpleCod5, SimpleCod6, SimpleCod7, SimpleCod8];

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
          <img key={index} style={{ height: "100%"} } src={each} />
        ))}
      </Zoom>
    </div>
  );
};

function SimpleSliderSimple() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default SimpleSliderSimple;