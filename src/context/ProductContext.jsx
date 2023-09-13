import { createContext, useEffect, useState } from "react";
// create context
export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  // products state
  const [products, setProducts] = useState([]);
  // loading state
  const [isLoading, setIsLoading] = useState(true);
  // error state
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const repsonse = await fetch("https://fakestoreapi.com/products");
        if (!repsonse.ok) {
          throw Error("Unable to Load Product");
        }
        const data = await repsonse.json();
        setProducts(data);
        setIsLoading(false);
        setIsError(false);
      } catch {
        setIsLoading(false);
        setIsError(true);
      }
    };
    fetchItem();
  }, []);

  return (
    <ProductContext.Provider value={{ products, isLoading, isError }}>
      {children}
    </ProductContext.Provider>
  );
}
