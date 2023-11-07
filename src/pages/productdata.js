import React, { useContext } from "react";
import "./productdata.css";
import { useParams } from "react-router-dom";
import { PRODUCTS } from "../components/products";
import { ShopContext } from "../App";

function ProductData() {
  const { productID } = useParams(); // Access the :id parameter
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);

  return (
    <>
      {PRODUCTS.map((product) => {
        if (product.id.toString() === productID) {
          return (
            <div className="product-container">
              <div className="product-card" key={product.id}>
                <img src={product.productImage}></img>
                <div className="product-description">
                  <h2>{product.productName}</h2>
                  {product.productSpecifications.map((point) => (
                    <p>• {point}</p>
                  ))}
                  <h4>{product.price}</h4>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCart(product.id)}
                  >
                    Add to cart{" "}
                    {cartItems[product.id] > 0 && (
                      <>({cartItems[product.id]})</>
                    )}
                  </button>
                  <button
                    className="remove-from-cart"
                    onClick={() => {
                      if (cartItems[product.id] > 0) {
                        removeFromCart(product.id);
                      }
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          );
        }
        return null; // Return null if the product is not found
      })}
    </>
  );
}

export default ProductData;
