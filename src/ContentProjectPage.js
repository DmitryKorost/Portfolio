import './Content.css';
import SimpleSliderSimple from './sliderSimle.js';
import SimpleSliderLearn from './sliderLearn.js';
import SimpleSliderCalc from './sliderCalc.js';
import Link from '@mui/material/Link';

function ContentProjectPage() {
  return (
    <div className='text'>
      <p  className='text-1'>1. Простой стартовый шаблон</p>
      <p>Этот проект показывет написание кода с использованием технологий HTML и CSS.</p>
      <p>Ссылка на <Link   style={{textDecoration: 'none'}} color="inherit" href="https://github.com/DmitryKorost/SimpleStarterTemplate">"Github.com"</Link></p>
      <SimpleSliderSimple/>    
      <p  className='text-1'>2. Научится учится</p>
      <p>Этот проект показывет написание кода с использованием технологий HTML и CSS.</p>
      <p>Ссылка на <Link   style={{textDecoration: 'none'}} color="inherit" href="https://github.com/DmitryKorost/Startkit">"Github.com"</Link></p>
      <SimpleSliderLearn/>   
      <p  className='text-1'>Калькулятор</p>
      <p>Этот проект показывет написание кода с использованием технологий JavaScript, HTML и CSS.</p>
      <p>Ссылка на <Link   style={{textDecoration: 'none'}} color="inherit" href="https://github.com/DmitryKorost/Calculator">"Github.com"</Link></p>
      <SimpleSliderCalc/>       
    </div>
  );
}
  
export default ContentProjectPage;



