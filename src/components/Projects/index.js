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
            <a href="https://ongiik.github.io/SudokuApplication/" target="_blank">
               <h2>Sudoku</h2>
               <img src={sudoku} alt="Sudoku" />
            </a>
         </div>
         <div className="card">
         <a href="https://ongiik.github.io/BoogsMarket/" target="_blank">
            <h2>Basix Market</h2>
            <img src={BoogsMarket} alt="Basix Market" />
         </a>
         </div>
         <div className="card">
         <a href="https://ongiik.github.io/WeatherApplication/" target="_blank">
            <h2>Weather Fellas</h2>
            <img src={WeatherFellas} alt="Weather Fellas" href="https:/ongiik.github.io/WeatherApplication/" />
         </a>
         </div>
         <div className="card">
         <a>
            <h2>In the works!</h2>
            <img src={InProgress} alt="In the works!" />
         </a>
         </div>
      </div>
   </>
   );
}

export default Projects;