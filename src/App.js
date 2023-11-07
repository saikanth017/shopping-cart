import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import Cart from "./pages/cart.js";
import Shop from "./pages/shop.js";
import React, { createContext, useState } from "react";
import { PRODUCTS } from "./components/products";
import ProductData from "./pages/productdata.js";
import Footer from "./components/footer";

export const ShopContext = createContext(null);

function App() {
  const getCart = () => {
    let cart = {};
    for (let i = 1; i <= PRODUCTS.length; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const calculateCheckoutAmount = () => {
    let total = 0;
    for (const productId in cartItems) {
      const quantity = cartItems[productId];
      if (quantity > 0) {
        const product = PRODUCTS.find((p) => p.id.toString() === productId);
        total += quantity * parseFloat(product.price.replace("$ ", ""));
      }
    }
    return total.toFixed(2);
  };

  const clearCheckout = () => {
    console.log("clear chekout is clicked");
    setCartItems(duplicateCartItems);
  };

  const [cartItems, setCartItems] = useState(getCart());
  const [duplicateCartItems, setDuplicateCartItems] = useState(getCart());
  const [cartLength, setCartLength] = useState(0);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    setCartLength((prev) => prev + 1);
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    setCartLength((prev) => prev - 1);
  };

  console.log(cartLength);

  const [searchQuery, setSearchQuery] = useState("");
  const [categoryQuery, setcategoryQuery] = useState("");

  const handleSearchChange = (query) => {
    setSearchQuery(query.target.value);
  };
  console.log(searchQuery);

  const handleCategoryChange = (query) => {
    setcategoryQuery(query.target.value);
  };
  console.log(categoryQuery);

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    calculateCheckoutAmount,
    clearCheckout,
    handleSearchChange,
    searchQuery,
    handleCategoryChange,
    categoryQuery,
    cartLength,
  };

  return (
    <div className="App">
      <ShopContext.Provider value={contextValue}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shop />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="/product/:productID" element={<ProductData />}></Route>
          </Routes>
        </BrowserRouter>
      </ShopContext.Provider>
    </div>
  );
}

export default App;
