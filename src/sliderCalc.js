import './slider.css';
import Calkulator from './imageProject/Calkulator.jpg';
import CalkulatorCod1 from './imageProject/CalkulatorCod1.jpg';
import CalkulatorCod2 from './imageProject/CalkulatorCod2.jpg';
import CalkulatorCod3 from './imageProject/CalkulatorCod3.jpg';

import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const images = [Calkulator, CalkulatorCod1, CalkulatorCod2, CalkulatorCod3];

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

function SimpleSliderCalc() {
  return (
    <div className="App">
      <Slideshow />
    </div>
  );
}

export default SimpleSliderCalc;