import React, { createContext, useState } from 'react'
import {PRODUCTS} from '../components/products'

export const ShopContext = createContext(null);

export function ShopContextProvider(props) {

    let getCart = () => {
        let cart = {};
        for (let i = 1; PRODUCTS.length + 1; i++){
            cart[i] = 0;
        }
        return cart
    }

    const [cartItems, setCartItems] = useState(getCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart}

    console.log(cartItems)

  return (
    <ShopContext.Provider value={contextValue}>
        {props.childeren}
    </ShopContext.Provider>
  )
}
