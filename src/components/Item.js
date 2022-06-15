import React from 'react'
import '../styles/items.css'
import ItemCount from './ItemCount'

function Item ({id, title, description, price, pictureUrl, stock}) {
  return (
    <div className="itemsContainer">
      <div className="item">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={pictureUrl} alt={id} />
        <p>${price}</p>
        <button>Ver detalle del producto</button>
        <ItemCount stock={stock}/>
      </div>
    </div>
  )
}

export default Item