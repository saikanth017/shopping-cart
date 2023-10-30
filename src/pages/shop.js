import React from "react";
import { PRODUCTS } from "../components/products";
import Product from "../components/product";
import "../components/product.css";

function Shop() {
  return (
    <div className="container">
      {PRODUCTS.map((p) => (
        <Product {...p} />
      ))}
    </div>
  );
}

export default Shop;
