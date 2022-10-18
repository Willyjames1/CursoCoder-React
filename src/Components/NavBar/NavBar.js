import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="NavBar">

      <div className="NavBar-B1">
        <Link to={"/SoftCases"} className="NavBar-B1-Cat1">Soft Cases</Link>
        <Link to={"/MaxProtectionCases"} className="NavBar-B1-Cat2">Max Protection</Link>
      </div>

      <div className="NavBar-B2">
        <Link to={"/"}>The Custom Shop</Link>
      </div>

      <div className="NavBar-B3">
        <CartWidget />
      </div>
    </div>
  );
};

export default NavBar;
