import { useContext } from "react";
import { ProductContext } from "../context";
import { ProductCard } from "../components";

export default function Product() {
  // Product context
  const { products, isLoading, isError } = useContext(ProductContext);
  console.log(products);
  // women's categories
  const women = products.filter((item) => {
    return item.category === "women's clothing";
  });
  // Men's categories
  const men = products.filter((item) => {
    return item.category === "men's clothing";
  });
  // Accesories
  const accesories = products.filter((item) => {
    return (
      item.category !== "women's clothing" && item.category !== "men's clothing"
    );
  });

  return (
    <section className="w-full font-Nippo">
      <div className="w-full mb-6">
        <h3 className="font-semibold w-full md:text-4xl text-2xl capitalize text-slate-500 border-b border-b-slate-300 md:leading-[2] leading-[1.8] mb-6">
          Women's Category
        </h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-[300px] mx-auto">
          {women.map((items) => {
            return <ProductCard product={items} key={items.id} />;
          })}
        </div>
      </div>

      <div className="w-full mb-6">
        <h3 className="font-semibold w-full md:text-4xl text-2xl capitalize text-slate-500 border-b border-b-slate-300 md:leading-[2] leading-[1.8] mb-6">
          Men's Category
        </h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-[300px] mx-auto">
          {men.map((items) => {
            return <ProductCard product={items} key={items.id} />;
          })}
        </div>
      </div>

      <div className="w-full mb-6">
        <h3 className="font-semibold w-full md:text-4xl text-2xl capitalize text-slate-500 border-b border-b-slate-300 md:leading-[2] leading-[1.8] mb-6">
          Accessories
        </h3>
        <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-[300px] mx-auto">
          {accesories.map((items) => {
            return <ProductCard product={items} key={items.id} />;
          })}
        </div>
      </div>
    </section>
  );
}