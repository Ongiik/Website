import { Link } from 'react-router-dom';
import './index.scss';
const Home = () => {

   return (
      <>
      <div className="container home-page">
         <div className="text-zone">
            <h1>Hi, I'm<br />Benen Kim</h1>
            <h2>Computer Science Student @ CPP</h2>
            <p>Aiming to grow my skills in Full-Stack Development and have a greater understanding in the world of technology.</p>
            <Link to="/contact" className='flat-button'>CONTACT ME</Link>
         </div>
      </div>
      </>
   );
}

export default Home; 