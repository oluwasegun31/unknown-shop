import { FaQuestion } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function RootLayout() {
  const navigate = useNavigate();
  return (
    <>
      <header className="w-full xl:p-6 p-4">
        <nav className="flex justify-between items-center border-b-2 border-b-gray-400 pb-1 cursor-pointer">
          <div onClick={() => navigate("/")}>
            <FaQuestion className="md:text-2xl text-[20px] font-normal text-slate-500" />
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
                  : "font-Nippo md:text-[22px] text-[20px] font-normal text-gray-500"
              }
            >
              Products
            </NavLink>
            <div className="border-l border-l-gray-300 px-2 cursor-pointer">
              <BiCart className="md:text-3xl text-2xl text-slate-600" />
            </div>
          </div>
        </nav>
      </header>
      <main className="xl:px-6 xl:pt-4 md:p-4 p-2">
        <Outlet />
      </main>
    </>
  );
}
