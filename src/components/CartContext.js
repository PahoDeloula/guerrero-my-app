import { useState } from 'react'
import { createContext } from 'react'

export const CartContext = createContext();

export const CartProvider = ({children}) => {

const [cartItems, setcartItems] = useState ([])

const addItem = (id, pictureUrl, title, price, quantity) => {
  if (isInCart(id)) {
      let index = cartItems.findIndex((index) => (index.id === id))
      let copiaCart = [...cartItems]
      copiaCart[index].quantity += quantity
      setcartItems(copiaCart)
  } else {
      const itemToAdd = {id, pictureUrl, title, price, quantity}
      setcartItems([...cartItems, itemToAdd])
  }
}

const addItemNavBar = () => {
  let quantity = 0
  cartItems.forEach((product) => {
      quantity = quantity + product.quantity
})
  return quantity
}

const isInCart = (id) => {
  return cartItems.some((item) => (item.id === id))
}

const removeItem = (id) => {
  setcartItems(cartItems.filter((item) => (item.id !== id)))
}

const getSubtotal = (price, quantity) => {
  let subtotal = 0
  subtotal = subtotal + (price * quantity)
  return Number(subtotal)                                     
}

const getTotal  = () => {
  let total = 0
  cartItems.forEach((product) => {
      total = total +(product.price * product.quantity)
  })

  return Number (total)
}

const clear = () => {
  setcartItems ([])
}

return (
  <CartContext.Provider value={{cartItems, addItem, addItemNavBar, isInCart, removeItem, getSubtotal, getTotal, clear}}>
      {children}
  </CartContext.Provider>
)

}