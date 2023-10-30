import React, { useContext, useState } from "react";
import "./cart.css";
import { PRODUCTS } from "../components/products";
import { ShopContext } from "../App";
import CartData from "../components/cartdata.js";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    calculateCheckoutAmount,
    clearCheckout,
  } = useContext(ShopContext);

  const navigate = useNavigate();
  let checkAmount = calculateCheckoutAmount();

  return (
    <>
      <div className="main-container">
        {PRODUCTS.map((p) => {
          if (cartItems[p.id] > 0) {
            return <CartData {...p} />;
          }
        })}

        {checkAmount > 0 ? (
          <div>
            <h3>Total Amount : $ {checkAmount}</h3>
            <button
              className="continue-shopping"
              onClick={() => {
                navigate("/");
              }}
            >
              Continue Shopping
            </button>
            <button className="checkout" onClick={() => clearCheckout()}>
              Checkout
            </button>
          </div>
        ) : (
          <h3>Your cart is empty</h3>
        )}
      </div>
    </>
  );
}

export default Cart;
