import '../styles/CartWidget.css'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {
  return (
    <NavLink to="/Cart" className="btnCarrito"><i className="fas fa-shopping-cart"></i><span className="btnCarritoNum"> 0</span>
    </NavLink>
  )
}
  
export default CartWidget