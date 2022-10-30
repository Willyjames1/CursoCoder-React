import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { Contexto } from "../../Context/CartContext";
import { useContext } from "react";
import Cart from "../Cart/Cart";


const NavBar = () => {

  const { CartStatus, setCartStatus } = useContext(Contexto)

  console.log(CartStatus);


  return (
    <div className="NavBar">

      <Cart />

      <div className="NavBar-B1">
        <Link to={"/SoftCases"} className="NavBar-B1-Cat1">Soft Cases</Link>
        <Link to={"/MaxProtectionCases"} className="NavBar-B1-Cat2">Max Protection</Link>
      </div>

      <div className="NavBar-B2">
        <Link to={"/"}>The Custom Shop</Link>
      </div>

      <div className="NavBar-B3" >
        <div className="NavBar-B3B1" onClick={() => setCartStatus(true)}>
          <CartWidget />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
