import { useContext } from "react";
import { CartBarContext, CartItemContext } from "../context";

import { BsArrowRight } from "react-icons/bs";

import CartItem from "./CartItem";

export default function CartBar() {
  // cartbar context
  const { isOpen, closeCart } = useContext(CartBarContext);
  const { cart } = useContext(CartItemContext);

  return (
    <aside
      className={`fixed top-0 ${
        isOpen ? "right-0" : "-right-full"
      }  lg:w-[33vw] sm:max-w-[45vw] w-full h-screen bg-slate-50 z-10 shadow-sm shadow-slate-400 transition-all duration-300 p-4 cursor-default`}
    >
      <div className="font-Nippo text-black flex justify-between items-center xl:text-[20px] text-lg mb-5">
        <p>Your Cart ({cart.length})</p>
        <div className="cursor-pointer" onClick={() => closeCart()}>
          <BsArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="w-full h-[75vh] overflow-y-auto overflow-x-hidden font-Nippo bg-white py-5 rounded-lg px-3">
        {cart.length === 0 ? (
          <div className="w-full h-[300px] flex justify-center items-center sm:text-2xl text-lg">
            <p>No Product Added to Cart</p>
          </div>
        ) : (
          cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })
        )}
      </div>
    </aside>
  );
}
