import './index.scss';
import Resume from '../../assets/Resume_KimBenen.pdf'

const Header = () => {

   return (
      <>
      <navbar className='nav-bar'>
         <a className='nav-buttons' href="/" id="name">Benen</a>
         <a className='nav-buttons' href={Resume}>resume</a>
      </navbar>
      </>
   )
}

export default Header;