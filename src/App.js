import './App.css';
import Header from './components/Header';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
  <>
    <Header/>
    <ItemListContainer saludo='¡Bienvenido a mi tienda virtual!' />
  </>
  )
}

export default App
