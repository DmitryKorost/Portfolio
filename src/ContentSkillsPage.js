import './Content.css';
import HTML from './imageTech/html.png';
import CSS from './imageTech/css.png';
import JS from './imageTech/javascript.png';
import GIT from './imageTech/git.png';
import VUE from './imageTech/Vue.png';
import React from './imageTech/React.png';

function ContentSkillsPage() {
    return (
      <div className='text'>
        <p  className='text-1'>Мои навыки</p>
        <p>В программировании я освоил следующие навыки frontend разработчика:</p>
        <ul  className='text-1'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Git</li>
            <li>Vue</li>
            <li>React</li>
          </ul>
          <p>Мои навыки были применены в написании калькуляторв и создании верстки сайтов.</p>
          <div className='imge'>
            <img src={HTML} className='image-icon' alt="not image"/>
            <img src={CSS} className='image-icon' alt="not image"/>
            <img src={JS} className='image-icon' alt="not image"/>
            <img src={GIT} className='image-icon' alt="not image"/>
            <img src={VUE} className='image-icon' alt="not image"/>
           <img src={React} className='image-icon' alt="not image"/>
          </div>          
      </div>
           
    );
  }  
  export default ContentSkillsPage;
