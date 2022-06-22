import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {productos} from "../utils/productos";
import {customFetch} from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { getProductsByCategory } from "../utils/customFetch";


function ItemListContainer() {
  const [items, setItems] = useState([])

  const { category } = useParams()

  useEffect(() => {
    if(!category) {
      customFetch(productos).then(response => {
        setItems(response)
        })
    } else {
        getProductsByCategory(category).then(response => {
          setItems(response)
        })
    }
}, [category])

return (
  <div>
    {items?.length <= 0 ? <h1>No hay items</h1> : <ItemList products={items} />}
  </div>
)
}

// useEffect(() => {
//   getProductsByCategory(category)
//   .then(response => {
//     setItems(response)
//   })
// }, [])

// function ItemDetailContainer() {

//   const [product, setProduct] = useState()
//   const { id } = useParams()

// useEffect(() => {
//   getProductsById(parseInt(id))
//   .then(response => {
//     setProduct(response)
//   })
// }, [])

//   return (
//          <div style={{marginTop: '30px'}}>
//             <ItemDetail {...product} />
//         </div>
//   )
// }

export default ItemListContainer