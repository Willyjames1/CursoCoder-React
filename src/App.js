import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/" element={<ItemListContainer/>} />
      <Route path="/item/:itemId" element={<ItemDetailContainer/>} />
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
