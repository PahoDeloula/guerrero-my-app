import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const params = 1;

  useEffect(
      ()=>{
          fetch('/productos.json').then(res => res.json()).then(data => {
              const index = data.findIndex(producto => producto.id === params);
              setItem(data[index]);
          })

      }
  ,[item]);

  return(
      <ItemDetail producto={item}/>
  )
};

export default ItemDetailContainer;