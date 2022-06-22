import '../styles/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="menuPrincipal">
      <NavLink to='/' className="menuBtn">HOME</NavLink>
      <NavLink to="/category/mujer"  className="menuBtn">MUJER</NavLink>
      <NavLink to="/category/hombre"  className="menuBtn">HOMBRE</NavLink>
      <CartWidget />
    </nav>
  )
}

export default NavBar