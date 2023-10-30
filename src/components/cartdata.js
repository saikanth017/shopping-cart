import React from "react";
import "./cartdata.css";
import { ShopContext } from "../App.js";
import { useContext } from "react";

function CartData({ id, productName, price, productImage }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="main-card">
      <div className="card-image">
        <img src={productImage} alt="pic"></img>
      </div>
      <div className="card-description">
        <h2>{productName}</h2>
        <p>{price}</p>
        <div className="card-buttons">
          <button className="add-to-cart" onClick={() => addToCart(id)}>
            +
          </button>
          <span>{cartItemAmount}</span>
          <button
            className="remove-from-cart"
            onClick={() => removeFromCart(id)}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartData;
