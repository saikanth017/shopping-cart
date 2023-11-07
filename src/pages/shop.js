import React from "react";
import { PRODUCTS } from "../components/products";
import Product from "../components/product";
import "../components/product.css";
import { useContext } from "react";
import { ShopContext } from "../App";

function Shop() {
  const { searchQuery, categoryQuery } = useContext(ShopContext);

  const filteredProductsBySearch = PRODUCTS.filter((product) =>
    product.productName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredProductsByCategory = PRODUCTS.filter((product) =>
    product.category.toLowerCase().includes(categoryQuery.toLowerCase())
  );

  const filteredProducts = categoryQuery
    ? filteredProductsByCategory
    : filteredProductsBySearch;

  return (
    <div className="container">
      {filteredProducts.map((p) => (
        <Product {...p} />
      ))}
    </div>
  );
}

export default Shop;
