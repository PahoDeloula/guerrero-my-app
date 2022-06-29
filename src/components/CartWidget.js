import '../styles/CartWidget.css'
import { NavLink } from 'react-router-dom'


const CartWidget = () => {
  
  //const resultado = useContext(contexto)

  //resultado.setCart

  return (
    <NavLink to="/Cart" className="btnCarrito"><i className="fas fa-shopping-cart"></i><span className="btnCarritoNum"> {}</span>
    </NavLink>
  )
}
  
export default CartWidget