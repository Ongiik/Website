import './index.scss';
import portrait from '../../assets/images/portrait.jpg'
const Home = () => {

   return (
      <>
      <div className="container home-page">
         <div className="text-zone">
            <h1>Hi, I'm<br />Benen Kim</h1>
            <h2>Computer Science Student @ CPP</h2>
            <p>Aiming to grow my skills in Full-Stack Development and have a greater understanding in the world of technology.</p>
            <a href='#contact' className='flat-button'>CONTACT ME</a>
         </div>
         <div className="img-container">
            <img src={portrait} alt="faceportrait" />
         </div>
      </div>
      <a id="contact" name="contact"></a>
      </>
   );
}

export default Home; 