import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";


const ItemListContainer = () => {
  return (
    <div className="ItemLC">
      <h2 className="ItemLC-h2">Recommended products</h2>
      <ItemList />
    </div>
  );
};

export default ItemListContainer;
