import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "../App";

function NavBar() {
  const { handleSearchChange, handleCategoryChange, cartLength } =
    useContext(ShopContext);
  return (
    <div className="nav-bar">
      <li>
        <Link className="title" to="/">
          Shopping Cart
        </Link>
      </li>
      <div className="search-catalog">
        <input
          placeholder="Search Products"
          onChange={handleSearchChange}
        ></input>
        <select onChange={handleCategoryChange}>
          <option value="">Search By Category</option>
          <option value="mobiles">Mobiles</option>
          <option value="laptops">Laptops</option>
          <option value="mens">Mens Accessories</option>
          <option value="women">Womens Accessories</option>
          <option value="electronics">General Electronics</option>
        </select>
      </div>

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
