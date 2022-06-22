import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({title, id, description, stock, price, pictureUrl}) {
  return (
    <div className="itemsContainer">
      <div className="item">
        <h2>{title}</h2>
        <p>{description}</p>
        <img src={pictureUrl} alt={id} />
        <p>${price}</p>
        <ItemCount stock={stock} initial={1}/>
      </div>
    </div>
  )
}

export default ItemDetail