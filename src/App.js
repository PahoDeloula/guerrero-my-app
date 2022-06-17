import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
  return (
  <>
    <Header/>
    <ItemListContainer saludo='¡Bienvenido a mi tienda virtual!' />
    <ItemDetailContainer/>
  </>
  )
}

export default App
