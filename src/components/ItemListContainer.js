import ItemCount from './ItemCount';
import React, { useEffect, useState } from 'react'
import customFetch from '../utils/customFetch';
import productos from '../utils/productos';
import ItemList from './ItemList';

const ItemListContainer = (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    customFetch(2000, productos)
    .then(resultado => setItems(resultado))
  }, [items])

  const onAdd = () => { }
  return (
        <div>
          <h1>{props.saludo}</h1>
          <ItemCount stock={5} onAdd={onAdd} initial={1} />
          <ItemList productos= {items}/>
          </div>
      )
  }

export default ItemListContainer