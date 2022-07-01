import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProd } from "../config/firebase"


function ItemListContainer() {
  const [items, setItems] = useState([])

  const { category } = useParams()

  useEffect(() => {
    const ref = category
    ? query(collectionProd, where('category', '==', category))
    : collectionProd
  getDocs(ref).then((response) => {
    const productos = response.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    setItems(productos);
  });
}, [category]);

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