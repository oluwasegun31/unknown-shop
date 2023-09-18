import { createContext, useState } from "react";

export const CartNotifContext = createContext();

export default function CartNotifProvider({ children }) {
  const [isAdded, setIsAdded] = useState(false);

  return (
    <CartNotifContext.Provider value={{ isAdded, setIsAdded }}>
      {children}
    </CartNotifContext.Provider>
  );
}
