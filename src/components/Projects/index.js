import './index.scss';
import BoogsMarket from '../../assets/images/BoogsMarket.png'
import WeatherFellas from '../../assets/images/WeatherFellas.png'
import InProgress from '../../assets/images/InProgress.png'
import sudoku from '../../assets/images/sudoku_placeholder.png'
const Projects = () => {
   return (
      <>
      <h1 className="proj-head">Projects</h1>
      <div className="grid-container">
         <div className="card">
            <img src={sudoku} alt="Sudoku" />
            <a>Sudoku</a>
         </div>
         <div className="card">
            <img src={BoogsMarket} alt="Basix Market" />
            <a>Basix Market</a>
         </div>
         <div className="card">
            <img src={WeatherFellas} alt="Weather Fellas" />
            <a>Weather Fellas</a>
         </div>
         <div className="card">
            <img src={InProgress} alt="In the works!" />
            <a>In the works!</a>
         </div>
      </div>
   </>
   );
}

export default Projects;