import { useContext } from "react";
import { CartBarContext, CartItemContext } from "../context";

import { BsArrowRight } from "react-icons/bs";

import CartItem from "./CartItem";

export default function CartBar() {
  // cartbar context
  const { isOpen, closeCart } = useContext(CartBarContext);
  const { cart, total, clearCart } = useContext(CartItemContext);

  return (
    <aside
      className={`fixed top-0 ${
        isOpen ? "right-0" : "-right-full"
      }  lg:w-[33vw] sm:max-w-[45vw] w-full h-screen bg-slate-50 z-10 shadow-sm shadow-slate-400 transition-all duration-300 p-4 cursor-default`}
    >
      <div className="font-Nippo text-black flex justify-between items-center xl:text-[20px] text-lg mb-2">
        <p>Your Cart ({cart.length})</p>
        <div className="cursor-pointer" onClick={() => closeCart()}>
          <BsArrowRight className="text-2xl" />
        </div>
      </div>
      <div className="w-full h-[73vh] overflow-y-auto overflow-x-hidden font-Nippo bg-white py-5 rounded-lg px-3">
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
      <div className="flex justify-between items-center font-Nippo text-lg capitalize">
        <p>Total Price</p>
        <p>₦ {parseFloat(total).toFixed(2)}</p>
      </div>
      <div className="flex flex-col justify-between items-center">
        <button
          className="bg-slate-600 font-Nippo w-full text-[20px] font-semibold py-1 px-3 text-white outline-none capitalize mb-3"
          onClick={() => clearCart()}
        >
          Clear Cart
        </button>
        <button className="bg-slate-600 font-Nippo w-full text-[20px] font-semibold py-1 px-3 text-white outline-none capitalize">
          Checkout
        </button>
      </div>
    </aside>
  );
}
