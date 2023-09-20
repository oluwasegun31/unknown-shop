import { useNavigate } from "react-router-dom";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <section className="w-full h-[80vh] flex flex-col justify-center items-center font-Nippo">
      <h3 className="sm:text-9xl text-7xl font-bold mb-3 text-slate-600">
        404
      </h3>
      <p className="capitalize sm:text-4xl text-2xl ">page not found</p>
      <p className="md:w-[50%] w-full text-center sm:text-lg text-base leading-[1]">
        the page you are looking for might have been removed had its name
        changes or is temporarily unavailable
      </p>
      <button
        className="bg-transparent border-2 border-slate-500 text-slate-600 sm:px-4 px-2 sm:py-2 py-1 mt-6 text-lg"
        onClick={() => navigate("/")}
      >
        HomePage
      </button>
    </section>
  );
}
