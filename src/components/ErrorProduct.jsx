import { RiPagesLine } from "react-icons/ri";
import { FiRefreshCcw } from "react-icons/fi";

export default function ErrorProduct() {
  return (
    <section className="w-full h-[80vh] flex flex-col justify-center items-center font-Nippo text-center">
      <RiPagesLine className="md:text-9xl text-8xl text-slate-500" />
      <p className="md:text-4xl sm:text-3xl text-2xl leading-[1] text-slate-600 mt-4 capitalize">
        Opps! Something went wrong
      </p>
      <p className="md:text-2xl text-lg text-slate-500 capitalize">
        Try refreshing this page
      </p>
      <button
        className="bg-slate-700 md:px-5 px-4 py-3 text-white text-lg mt-3 cursor-pointer"
        onClick={() => window.location.reload()}
      >
        <FiRefreshCcw />
      </button>
      <p className="mt-2 text-slate-500 md:text-lg text-base">
        Problem persist? try contacting customer care
      </p>
    </section>
  );
}
