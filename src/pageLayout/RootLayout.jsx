import { FaQuestion } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { CartBar } from "../components";
import { useContext } from "react";
import { CartBarContext, CartItemContext } from "../context";

export default function RootLayout() {
  const navigate = useNavigate();
  const { setIsOpen } = useContext(CartBarContext);
  const { cart } = useContext(CartItemContext);
  return (
    <>
      <header className="w-full xl:p-6 p-4 relative">
        <nav className="flex justify-between items-center border-b-2 border-b-gray-400 pb-1 cursor-pointer">
          <div onClick={() => navigate("/")}>
            <FaQuestion className="md:text-2xl text-[20px] font-normal text-slate-500 hover:text-black transition duration-300" />
          </div>
          <div className="font-Nippo font-medium text-[26px] text-slate-500 md:block hidden cursor-default">
            <p>Unknown Store</p>
          </div>
          <div className="flex justify-center items-center gap-5">
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive
                  ? "font-Nippo md:text-[22px] text-[20px] font-medium text-slate-600"
                  : "font-Nippo md:text-[22px] text-[20px] font-normal text-gray-500 hover:text-gray-900 transition duration-300"
              }
            >
              Products
            </NavLink>
            <div
              className="border-l border-l-gray-300 px-2 cursor-pointer relative"
              onClick={() => setIsOpen((val) => !val)}
            >
              <BiCart className="md:text-3xl text-2xl text-slate-600 hover:text-gray-900 transition duration-300" />
              <div
                className={`w-3 h-3 rounded-full bg-red-600 absolute -bottom-1 right-0 ${
                  cart.length === 0 ? "scale-0" : "scale-100"
                } transition-all duration-500`}
              ></div>
            </div>
          </div>
          <CartBar />
        </nav>
      </header>
      <main className="xl:px-6 xl:pt-4 md:p-4 p-2">
        <Outlet />
      </main>
    </>
  );
}
