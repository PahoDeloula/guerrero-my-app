import { getDoc, doc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collectionProd } from '../config/firebase'
import ItemDetail from './ItemDetail'

function ItemDetailContainer() {

  const [product, setProduct] = useState()
  const { id } = useParams()

useEffect(() => {
  const ref = doc(collectionProd, id);
  getDoc(ref).then((response) => {
    setProduct({
      id: response.id,
      ...response.data(),
    });
  });
}, [id]);

  return (
         <div style={{marginTop: '30px'}}>
            <ItemDetail {...product} />
        </div>
  )
}

export default ItemDetailContainer