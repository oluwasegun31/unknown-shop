import { useContext } from "react";
import { ProductContext, CartNotifContext } from "../context";
import {
  MarqueeCard,
  ProductCard,
  CartNotif,
  Loading,
  ErrorProduct,
} from "../components";

export default function Product() {
  // Product context
  const { products, isLoading, isError } = useContext(ProductContext);
  // cart notification context
  const { isAdded } = useContext(CartNotifContext);
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
    <section className="w-full font-Nippo relative">
      {isLoading && <Loading />}
      {isError ? (
        <ErrorProduct />
      ) : (
        <section>
          <div className="w-full mb-6">
            <h3 className="font-semibold w-full md:text-4xl text-2xl capitalize text-slate-500 border-b border-b-slate-300 md:leading-[2] leading-[1.8] mb-2">
              Women's Category
            </h3>
            <MarqueeCard
              section={"Women's Section"}
              promo={"Get 30% off on next 3 deliveries"}
            />
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-[300px] mx-auto">
              {women.map((items) => {
                return <ProductCard product={items} key={items.id} />;
              })}
            </div>
          </div>

          <div className="w-full mb-6">
            <h3 className="font-semibold w-full md:text-4xl text-2xl capitalize text-slate-500 border-b border-b-slate-300 md:leading-[2] leading-[1.8] mb-2">
              Men's Category
            </h3>
            <MarqueeCard
              section={"Men's Section"}
              promo={"Get 20% off on next 4 deliveres"}
            />
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-[300px] mx-auto">
              {men.map((items) => {
                return <ProductCard product={items} key={items.id} />;
              })}
            </div>
          </div>

          <div className="w-full mb-6">
            <h3 className="font-semibold w-full md:text-4xl text-2xl capitalize text-slate-500 border-b border-b-slate-300 md:leading-[2] leading-[1.8] mb-2">
              Accessories
            </h3>
            <MarqueeCard
              section={"Accesories Section"}
              promo={"Get 30% off on sale greater than ₦80,000"}
            />
            <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-6 gap-4 lg:max-w-6xl md:max-w-4xl sm:max-w-xl max-w-[300px] mx-auto">
              {accesories.map((items) => {
                return <ProductCard product={items} key={items.id} />;
              })}
            </div>
          </div>
          <div
            className={`fixed top-20 ${
              isAdded ? "right-2" : "-right-full"
            } transition-all duration-200 z-50`}
          >
            <CartNotif />
          </div>
        </section>
      )}
    </section>
  );
}
