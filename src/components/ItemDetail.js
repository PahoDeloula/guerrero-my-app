import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

function ItemDetail({title, id, description, stock, price, pictureUrl}) {
  const [comprarProducto, setComprarProducto] = useState();
  const onAdd = (cantidadSeleccionada) => {
    setComprarProducto(cantidadSeleccionada);
  }
  return (
    <div className="itemsContainer">
      <div className="item">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={pictureUrl} alt={id} />
        <p>${price}</p>
        {comprarProducto ? <Link to={"/cart"}>Finalizar la compra</Link> : <ItemCount stock={stock} initial={1} onAdd={onAdd}/>}
      </div>
    </div>
  )
}

export default ItemDetail