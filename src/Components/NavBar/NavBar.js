import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">
      
      <div className="NavBar-B1">
        <a href={"/"}>Categories</a>
        <a href={"/"}>DEALS!</a>
      </div>

      <div className="NavBar-B2">
        <a href={"/"}>The Custom Shop</a>
      </div>

      <div className="NavBar-B3">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
