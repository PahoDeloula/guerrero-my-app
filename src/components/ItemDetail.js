import { useState, useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({title, id, description, stock, price, pictureUrl, price2}) {
  const[borrarConfirmar, setBorrarConfirmar] = useState(false)

  const { addItem } = useContext(CartContext)

  const addToCart = (quantity) => {
    addItem(id, pictureUrl, title, price, quantity)
    setBorrarConfirmar (true)
  }
  return (
    <div className="itemsContainer">
      <div className="item">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={pictureUrl} alt={id} />
        <p>${price}</p>
        {borrarConfirmar ? <Link to={"/cart"}>Finalizar la compra</Link> : <ItemCount stock={stock} initial={0} onAdd={addToCart}/>}
      </div>
    </div>
  )
}

export default ItemDetail