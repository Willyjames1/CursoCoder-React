import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import MaxProtectionPage from "./Pages/MaxProtectionPage/MaxProtectionPage";
import SoftPage from "./Pages/SoftPage/SoftPage";



function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/MaxProtectionCases" element={<MaxProtectionPage />} />
        <Route path="/SoftCases" element={<SoftPage />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
