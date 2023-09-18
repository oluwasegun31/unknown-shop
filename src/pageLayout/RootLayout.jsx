import { FaQuestion } from "react-icons/fa";
import {
  BiCart,
  BiLogoTwitter,
  BiLogoGmail,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
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

      <footer className="bg-slate-800 md:px-14 px-8 py-10 font-Nippo">
        <div className="flex sm:flex-row flex-col sm:gap-0 gap-4 justify-between items-center">
          <div
            className="md:text-3xl text-[20px] font-normal text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            <FaQuestion />
          </div>
          <div>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive
                  ? "font-Nippo md:text-[22px] sm:text-[20px] text-lg font-medium text-white"
                  : "font-Nippo md:text-[22px] sm:text-[20px] text-lg font-normal text-white"
              }
            >
              Products
            </NavLink>
          </div>
          <div className="text-white lg:text-2xl text-lg text-center leading-[1]">
            <p>@copyright unknown store 2023</p>
          </div>
        </div>
        <div className="flex justify-center item center text-white mt-10 border-t border-t-white pt-6 sm:text-4xl text-3xl gap-5 ">
          <BiLogoTwitter className="hover:text-slate-200 transition duration-300 cursor-pointer" />
          <BiLogoGmail className="hover:text-slate-200 transition duration-300 cursor-pointer" />
          <BiLogoInstagram className="hover:text-slate-200 transition duration-300 cursor-pointer" />
          <BiLogoLinkedinSquare className="hover:text-slate-200 transition duration-300 cursor-pointer" />
        </div>
      </footer>
    </>
  );
}
