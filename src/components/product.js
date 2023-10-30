import React, { useContext } from "react";
import "./product.css";
import { ShopContext } from "../App.js";

function Product({ id, productName, price, productImage }) {
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  const cartItemAmount = cartItems[id];

  return (
    <div className="card">
      <img src={productImage} alt="pic"></img>
      <h2>{productName}</h2>
      <p>{price}</p>
      <div className="buttons">
        <button className="add-to-cart" onClick={() => addToCart(id)}>
          Add to cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
        <button className="remove-from-cart" onClick={() => removeFromCart(id)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default Product;
