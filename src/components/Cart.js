import React from 'react'
import { useContext } from 'react'
import { CartContext  } from './CartContext'
import { Link } from 'react-router-dom'

function Cart() {
  const {cartItems, addItemNavBar, removeItem, getSubtotal, getTotal, clear} = useContext(CartContext)
  return (
    <>
    {addItemNavBar() === 0 ? (
        <div>
          <div>
            <p>¡Auch! ¿No te gustó ninguna playera? Tu carrito esta vacío. ¡Puedes regresar a darles una segunda oportunidad!</p>
            <Link to='/'>Volver al inicio</Link>
          </div>
        </div>
        ) : (
    
    <div>
      <h2>Mi Carrito</h2>
      <div className="cartContainer">
      {cartItems.map((products) => (
        <div key={products.id}>
            <img src={products.pictureUrl} alt="" />
            <h2>{products.title}</h2>
            <p>Precio: ${products.price} Cantidad: {products.quantity}</p>
            <p>Subtotal: ${getSubtotal(products.price, products.quantity )}</p>   
            <button onClick={() => removeItem(products.id)} >Borrar producto</button>
            <div><button onClick={clear}>Vaciar Carrito</button></div>   
        </div>        
            ))}
        </div>
        <div className="txtCart">
          <p>Te estas llevando en total:</p>
          <p>{addItemNavBar()} playeras</p>
          <p>TOTAL: ${getTotal()}</p> 
        </div>
    </div>
        )}
    </>
  )}
 
export default Cart