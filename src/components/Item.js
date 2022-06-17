import React from 'react'
import '../styles/items.css'

function Item ({id, title,price, pictureUrl, stock}) {
  return (
    <div className="itemsContainer">
      <div className="item">
        <h2>{title}</h2>
        <img src={pictureUrl} alt={id} />
        <p>${price}</p>
        <button>Ver detalle del producto</button>
        <p>Stock disponible: {stock}</p>
      </div>
    </div>
  )
}

export default Item