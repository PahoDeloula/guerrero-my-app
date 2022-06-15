import React from 'react'
import Item from './Item';

function ItemList({productos}) {
  return (
    productos.map(p =>
      <Item
      id= {p.id}
      title= {p.title}
      description= {p.description}
      pictureUrl= {p.pictureUrl}
      price= {p.price}
      key={p.id}
      stock={p.stock}
      />
      )
  )
}

export default ItemList