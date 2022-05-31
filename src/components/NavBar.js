import '../styles/NavBar.css'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav className="menuPrincipal">
      <a href="https://plataforma.coderhouse.com/" className="menuBtn">HOME</a>
      <a href="https://plataforma.coderhouse.com/" className="menuBtn">MUJER</a>
      <a href="https://plataforma.coderhouse.com/" className="menuBtn">HOMBRE</a>
      <CartWidget />
    </nav>
  )
}

export default NavBar