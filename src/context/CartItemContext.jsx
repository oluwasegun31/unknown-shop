import { createContext, useState } from "react";

export const CartItemContext = createContext();

export default function CartItemProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);
  // add to cart
  const addCart = (id, product) => {
    // add amount to cart
    const newCartItem = { ...product, amount: 1 };
    // check if cart item exist
    const checkCart = cart.find((item) => {
      return item.id === id;
    });
    if (checkCart) {
      alert("Already Exist");
    } else {
      setCart([...cart, newCartItem]);
    }
  };
  // remove from cart
  const removeCart = (id) => {
    const newCartItem = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCartItem);
  };
  // increase amount
  const increaseAmount = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
  };
  // reduce amount
  const reduceAmount = (id) => {
    const newCart = [...cart].map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    setCart(newCart);
    // remove cart item if amount is less than 1
    if (newCart.find((item) => item.id === id)?.amount < 2) {
      removeCart(id);
    }
  };

  return (
    <CartItemContext.Provider
      value={{ cart, addCart, removeCart, increaseAmount, reduceAmount }}
    >
      {children}
    </CartItemContext.Provider>
  );
}
