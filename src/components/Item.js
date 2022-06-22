import React from 'react'
import '../styles/items.css'
import { Link } from 'react-router-dom'

function Item ({id, title, price, pictureUrl, stock}) {
  return (
    <article className="itemsContainer">
      <div className="item">
        <h2>{title}</h2>
        <img src={pictureUrl} alt={id} />
        <p>${price}</p>
        <Link to={`/item/${id}`}>Ver detalle del producto</Link>
        <p>Stock disponible: {stock}</p>
      </div>
    </article>
  )
}

export default Item