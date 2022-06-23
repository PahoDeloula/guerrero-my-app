import { useState } from "react";

function ItemCount({stock, initial, onAdd}) {
    
  const [count, setCount] = useState(initial)
  
  function adding  ()  {
      if(count < stock) {
          setCount(count + 1)
      }
  }

  function subs () {
      if(count > 0) {
          setCount(count - 1)
      }
  }

  const confirmarContador = (e) => {
    onAdd(count)
  }

return (
  <div>
    <button onClick={subs}>-</button>
    <span>{count}</span>
    <button onClick={adding}>+</button>
    <div style={{marginTop: '10px'}}>
      {
        count > 0 ? <button onClick={confirmarContador}>Agregar al carrito</button>: <></>
      }
    </div>
  </div>
)
}

export default ItemCount