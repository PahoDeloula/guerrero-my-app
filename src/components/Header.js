import NavBar from './NavBar'
import '../styles/header.css';

const Header = () => {

  return (
    <header className='header'>
      <img 
        className='imgLogo'
        src={require(`../imgs/logo.png`)}
        alt='Logo'/>
      <NavBar />
    </header>
    )
}

export default Header