import { createContext, useContext, useEffect, useState } from "react";
import { CartNotifContext } from "./CartNotifContext";

export const CartItemContext = createContext();

export default function CartItemProvider({ children }) {
  // cart state
  const [cart, setCart] = useState([]);
  // total amount state
  const [total, setTotal] = useState(0);
  // cart notification context
  const { setIsAdded } = useContext(CartNotifContext);
  useEffect(() => {
    const total = cart.reduce((acc, curItem) => {
      return acc + curItem.price * curItem.amount;
    }, 0);
    setTotal(total);
  }, [cart]);
  // add to cart
  const addCart = (id, product) => {
    // add amount to cart
    const newCartItem = { ...product, amount: 1 };
    // check if cart item exist
    const checkCart = cart.find((item) => {
      return item.id === id;
    });
    if (checkCart) {
      setIsAdded(true);
      // remove the cart notification after 2 seconds
      setTimeout(() => setIsAdded(false), 2000);
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
    if (newCart.find((item) => item.id === id)?.amount < 1) {
      removeCart(id);
    }
  };
  // clear cart
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartItemContext.Provider
      value={{
        cart,
        addCart,
        removeCart,
        increaseAmount,
        reduceAmount,
        total,
        clearCart,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
}
