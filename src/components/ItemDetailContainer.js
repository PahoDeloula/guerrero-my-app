import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductsById } from '../utils/customFetch'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

  const [product, setProduct] = useState()
  const { id } = useParams()

useEffect(() => {
  getProductsById(parseInt(id))
  .then(response => {
    setProduct(response)
  })
}, [id])

  return (
         <div style={{marginTop: '30px'}}>
            <ItemDetail {...product} />
        </div>
  )
}

export default ItemDetailContainer