import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { useContext } from "react";
import { CartItemContext } from "../context";

export default function CartItem({ item }) {
  // cart item context
  const { removeCart, increaseAmount, reduceAmount } =
    useContext(CartItemContext);
  const { image, id, title, amount, price } = item;
  // function to truncate title
  const truncateStr = (str) => {
    return str.length > 35 ? str.slice(0, 35) + "..." : str;
  };
  return (
    <div
      className="flex justify-between items-start mb-4 border-b border-b-slate-300 pb-4 relative"
      key={id}
    >
      <div className="flex justify-center items-start gap-4">
        <img
          src={image}
          alt="product"
          className="max-h-16 md:w-20 w-12 object-contain"
        />
      </div>
      <div className="flex flex-col justify-between items-start h-16">
        <p className="text-sm font-normal leading-[1]">{truncateStr(title)}</p>
        <div className="flex justify-start items-center gap-4 bg-slate-200 p-1">
          <div
            className="text-lg border-r border-r-slate-500 h-full w-14 flex justify-center items-center md:px-2 px-1 cursor-pointer"
            onClick={() => increaseAmount(id)}
          >
            <AiOutlinePlus />
          </div>
          <div className="text-base flex justify-center items-center">
            <p>{amount}</p>
          </div>
          <div
            className="text-lg border-l border-l-slate-500 h-full w-14 flex justify-center items-center md:px-2 px-1 cursor-pointer"
            onClick={() => reduceAmount(id)}
          >
            <AiOutlineMinus />
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer text-lg text-black"
        onClick={() => removeCart(id)}
      >
        <GrClose />
      </div>
      <div className="absolute bottom-3 right-0 text-base">
        <p>₦ {parseFloat(price * amount).toFixed(2)}</p>
      </div>
    </div>
  );
}
