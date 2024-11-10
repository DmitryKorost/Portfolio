import './Content.css';
import SimpleSlider from './slider';

function ContentHomePage() {
    return (
      <div className='text'>
        <p  className='text-1'>Привет!</p>
        <p>Я web-программист.</p>
        <p>Помогаю запускать и развивать сайты.</p>
        <p>Практичный и эффективный разработчик.</p>
        <p>Завершаю проекты в срок и рамках бюджета.</p> 
        <p>Имею навыки HTML, CSS, JavaScript, Git, Vue, React.</p> 
        <SimpleSlider/>        
      </div>
    );
  }
  
  export default ContentHomePage;