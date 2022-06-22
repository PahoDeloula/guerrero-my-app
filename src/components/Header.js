import NavBar from './NavBar'
import '../styles/header.css';
import { Link } from 'react-router-dom'

const Header = () => {

  return (
    <header className='header'>
      <Link to='/'>
        <img 
          className='imgLogo'
          src={require(`../imgs/logo.png`)}
          alt='Logo'/>
      </Link>
      <NavBar />
    </header>
    )
}

export default Header