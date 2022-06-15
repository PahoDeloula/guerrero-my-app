import { useState } from "react";
import '../styles/items.css'

function ItemCount ({stock,initial,onAdd}) {
  const [contador, setContador] = useState(initial)

  function aumentarContador () {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  function disminuirContador () {
    if (contador > 0) {
      setContador(contador - 1)
      }
  }
  const confirmarContador = () => {
    if (contador <= stock) {
      alert('Se agregaron ' + contador + ' playeras al carrito de compras')
    }
  }
  return (
    <div className="itemsContainer">
      <div>
        <div className="containerBtns">
          <button onClick={disminuirContador} className="btnContainer">-</button>
          <p>{contador}</p>
          <button onClick={aumentarContador} className="btnContainer">+</button>
        </div>
        <button onClick={confirmarContador} className="btnAgregar">Agregar al carrito</button>
      </div>
    </div>
  )
}

export default ItemCount
