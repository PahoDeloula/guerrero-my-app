import ItemCount from './ItemCount';

const ItemListContainer = (props) => {
  const onAdd = () => { }
  return (
        <div>
          <h1>{props.saludo}</h1>
          <ItemCount stock={5} onAdd={onAdd} initial={1} />
          </div>
      )
  }

export default ItemListContainer