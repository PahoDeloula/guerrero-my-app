import React from 'react'
import ItemCount from './ItemCount'

function ItemDetail({producto}) {
  return ( <div className="itemsContainer">
      <div className="item">
        <h2>{producto.title}</h2>
        <img src={producto.pictureUrl} alt={producto.id} />
        <p>${producto.price}</p>
        <button>Ver detalle del producto</button>
        <ItemCount stock={producto.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail