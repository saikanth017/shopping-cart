import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <h2>Shopping Cart</h2>
      <div className="links">
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li className="cart-icon">
          <Link to="/cart">
            <ShoppingCart size={35} />
          </Link>
        </li>
      </div>
    </div>
  );
}

export default NavBar;
