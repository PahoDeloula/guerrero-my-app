import { useState } from "react";
import '../styles/items.css'

const ItemCount = ({stock,initial,onAdd}) => {
  const [contador, setContador] = useState(initial)

  const aumentarContador = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }else {
      alert('¡Lo sentimos! Ese es el número máximo de stock')
    }
  }

  const disminuirContador = () => {
    if (contador > 0) {
      setContador(contador - 1)
      }
    else {
      alert('¡Lo sentimos! Se nos terminó el stock')
    }
  }

  const confirmarContador = () => {
    if (contador <= stock) {
      alert('Se agregaron ' + contador + ' playeras al carrito de compras')
    }
  }
  return (
    <div className="itemsContainer">
      <div className="item">
        <p>Playera: THE BEATLES</p>
        <p>"Strawberry fields forever":</p>
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
