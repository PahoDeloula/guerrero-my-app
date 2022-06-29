import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/CartContext';


const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>} />
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
    
  )
}

export default App
