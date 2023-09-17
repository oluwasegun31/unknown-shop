import { createContext, useState } from "react";

export const CartBarContext = createContext();

export default function CartBarProvider({ children }) {
  // cart open and close state
  const [isOpen, setIsOpen] = useState(false);
  // function to trigger the cart close
  const closeCart = () => {
    return setIsOpen(false);
  };

  return (
    <CartBarContext.Provider value={{ isOpen, setIsOpen, closeCart }}>
      {children}
    </CartBarContext.Provider>
  );
}
