import React, { useState } from 'react'
import { useContext } from 'react'
import { CartContext  } from './CartContext'
import { Link } from 'react-router-dom'
import { collection, serverTimestamp, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase'
import Form from './Form';

function Cart() {
  const [data, setData] = useState({ name: '', email: '', phone: '' });
  const [orderId, setOrderId] = useState('');
  const {cartItems, addItemNavBar, removeItem, getSubtotal, getTotal, deleteAll} = useContext(CartContext)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setData({
        ...data,
        [name]: value,
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const objOrden = {
      buyer:{
        name: data.name,
        phone: data.phone,
        email: data.email
      },
      cartItems,
      total: getTotal(),
      date: serverTimestamp(),
    };
    const ref = collection(db, 'orders');
    addDoc(ref, objOrden).then((response) => {
      setOrderId(response.id);
      deleteAll()
    })
  }
  if(orderId !== '') {
    return <h1>¡Gracias por tu compra! Tu número de envío es: {orderId}</h1>
  }

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
            <div><button onClick={deleteAll}>Vaciar Carrito</button></div>   
        </div>        
            ))}
        </div>
        <div className="txtCart">
          <p>Te estas llevando en total:</p>
          <p>{addItemNavBar()} playeras</p>
          <p>TOTAL: ${getTotal()}</p> 
        </div>
        <Form
          handleChange={handleChange}
          data={data}
          handleSubmit={handleSubmit}
    />
    </div>
        )}
    </>
  )}
 
export default Cart