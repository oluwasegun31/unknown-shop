import { FaStar } from "react-icons/fa";
import { BiCart } from "react-icons/bi";
import { BsArrowReturnRight } from "react-icons/bs";
import { useContext } from "react";
import { CartItemContext } from "../context";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  // navigate context
  const navigate = useNavigate();
  // Product destructure
  const { title, id, image, price, rating } = product;
  // function to truncate title
  const truncateStr = (str) => {
    return str.length > 13 ? str.slice(0, 13) + "..." : str;
  };
  // function to add extra zero's to price
  const addZero = (num) => {
    return parseFloat(num + 1000).toFixed(2);
  };
  // cartItem context
  const { addCart } = useContext(CartItemContext);

  return (
    <section className="bg-white md:h-[400px] h-[350px] shadow-sm relative group transition-all">
      <div className="flex justify-center items-center w-full h-full">
        <div className="w-[250px] flex justify-center items-center">
          <img
            src={image}
            alt="product"
            className="bg-transparent max-h-[200px] object-contain group-hover:scale-90 transition-all duration-300 group-hover:opacity-80"
          />
        </div>
      </div>
      <div className="absolute top-2 right-5 flex justify-center items-center gap-1">
        <FaStar className="text-yellow-600" />
        <p>{rating.rate}</p>
      </div>
      <div className="absolute bottom-4 left-5">
        <p>{truncateStr(title)}</p>
        <p>₦ {addZero(price)}</p>
      </div>
      <div className="w-[120px] h-[50px] shadow-md bg-white absolute right-4 top-28 text-2xl flex flex-row justify-around items-center rounded-sm overflow-hidden opacity-0 group-hover:opacity-100 group-hover:right-10 transition-all duration-300">
        <div
          className="flex justify-center items-center bg-slate-500 w-full h-full cursor-pointer text-white"
          onClick={() => addCart(id, product)}
        >
          <BiCart />
        </div>
        <div
          className="flex justify-center items-center w-full h-full cursor-pointer"
          onClick={() => navigate(`${id}`)}
        >
          <BsArrowReturnRight />
        </div>
      </div>
    </section>
  );
}
