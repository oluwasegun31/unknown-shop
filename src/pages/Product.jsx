import { useContext } from "react";
import { ProductContext } from "../context";

export default function Product() {
  const { products, isLoading, isError } = useContext(ProductContext);
  return <p>{isError ? "Error" : isLoading ? "Loading...." : "products"}</p>;
}
