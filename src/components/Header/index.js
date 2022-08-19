import './index.scss';
import { Link } from 'react-router-dom';
const Header = () => {

   return (
      <>
      <navbar className='nav-bar'>
         <a className='nav-buttons' id="name">Benen</a>
         <a className='nav-buttons' to="/contact">contact</a>
      </navbar>
      </>
   )
}

export default Header;