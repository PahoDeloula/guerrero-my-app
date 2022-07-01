import '../styles/CartWidget.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext  } from './CartContext'


function CartWidget () {
  const {addItemNavBar} = useContext (CartContext)
  return (
    <NavLink to="/Cart" className="btnCarrito"><i className="fas fa-shopping-cart"></i><span className="btnCarritoNum"> {addItemNavBar()}</span>
    </NavLink>
  )
       }
  
export default CartWidget