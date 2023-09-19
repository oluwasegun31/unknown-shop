import { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { PiPersonArmsSpreadBold } from "react-icons/pi";
import { CartNotif } from "../components";
import { BiCart } from "react-icons/bi";
import { CartItemContext, CartNotifContext } from "../context";

export default function Details({ filterProduct, id }) {
  // cartitem context
  const { addCart } = useContext(CartItemContext);
  // cart notification context
  const { isAdded } = useContext(CartNotifContext);
  //destructure filterProduct
  const { title, image, description, price, rating } = filterProduct;
  // function to add extra zero's to price
  const addZero = (num) => {
    return parseFloat(num * 200).toFixed(2);
  };

  return (
    <>
      <section className="bg-white md:p-4 py-4 px-2 mt-4 flex lg:flex-row flex-col justify-start items-center relative">
        <div>
          <img
            src={image}
            alt="product"
            className="xl:max-h-[550px] md:max-h-[400px] max-h-[350px] object-contain"
          />
        </div>
        <div className="lg:w-[65%] w-full">
          <h2 className="md:text-3xl text-2xl leading-[1] text-center font-semibold capitalize opacity-75 lg:mt-0 mt-10">
            {title}
          </h2>
          <div className="mt-10 flex justify-between items-center md:text-2xl text-[20px]">
            <p>₦ {addZero(price)}</p>
            <span className="flex justify-center items-center gap-1">
              <FaStar className="text-yellow-400" />
              <p>{rating.rate}</p>
            </span>
            <span className="flex justify-center items-center gap-1">
              <PiPersonArmsSpreadBold />
              <p>{rating.count}</p>
            </span>
          </div>
          <p className="text-justify mt-6 text-base">{description}</p>
          <div className="md:text-2xl text-lg md:mt-10 mt-5">
            <button
              className="flex justify-center items-center gap-2 bg-slate-600 py-2 px-3 text-white"
              onClick={() => addCart(parseInt(id), filterProduct)}
            >
              <BiCart />
              <p>Add to cart</p>
            </button>
          </div>
        </div>
      </section>
      <div
        className={`fixed top-20 ${
          isAdded ? "right-2" : "-right-full"
        } transition-all duration-200 z-50`}
      >
        <CartNotif />
      </div>
    </>
  );
}
