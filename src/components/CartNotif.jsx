import tickIcon from "../assets/icons8-tick-45.png";
export default function CartNotif() {
  return (
    <aside className="flex justify-center items-center w-auto md:p-3 p-2 bg-slate-600">
      <img
        src={tickIcon}
        alt="icons"
        className="md:w-[35px] w-[30px] object-contain md:mr-3 mr-2"
      />
      <h1 className=" text-white font-Nippo md:text-lg text-base capitalize">
        already added to cart
      </h1>
    </aside>
  );
}
