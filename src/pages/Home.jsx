import { Link } from "react-router-dom";
import heroImg from "../assets/wallhaven-6kg2qw_1300x600.png";
import mobileHero from "../assets/wallhaven-g8813d_500x750.png";

export default function Home() {
  return (
    <section className="w-full sm:h-[82vh] h-[88vh] relative">
      <picture>
        <source
          srcSet={mobileHero}
          media="(max-width: 600px)"
          className="w-full h-full object-cover"
        />
        <img src={heroImg} alt="hero" className="w-full h-full object-cover" />
      </picture>
      <div className="absolute bottom-16 text-white font-Nippo w-full md:px-8 sm:px-5 px-2">
        <h3 className="xl:text-6xl lg:text-5xl md:text-4xl text-2xl font-semibold">
          New
        </h3>
        <h3 className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl font-semibold">
          Unknown Collections Available.
        </h3>
        <div className="flex justify-between items-center border-t border-t-white mt-10">
          <Link
            to={"products"}
            className="md:text-2xl text-lg font-nornal hover:text-slate-300 transition-all duration-300"
          >
            Explore
          </Link>
          <svg
            viewBox="0 0 63 305"
            className="w-5 md:h-30 h-20 -rotate-90 -translate-x-10"
          >
            <path
              className="arrow-line"
              style={{
                fill: "none",
                stroke: "#ffff",
                strokeWidth: 8,
                strokeDashoffset: "0px",
                strokeDasharray: 304,
              }}
              d="M31 0,31 304"
            />
            <path
              className="arrow-left"
              style={{
                fill: "none",
                stroke: "#ffff",
                strokeWidth: 8,
                strokeDashoffset: "0px",
                strokeDasharray: 51,
              }}
              d="M1,269c0,0,29-1,30,35"
            />
            <path
              className="arrow-right"
              style={{
                fill: "none",
                stroke: "#ffff",
                strokeWidth: 8,
                strokeDashoffset: "0px",
                strokeDasharray: 51,
              }}
              d="M61,269c0,0-29-1-30,35"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
