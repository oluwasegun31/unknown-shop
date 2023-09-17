import Marquee from "react-fast-marquee";

export default function MarqueeCard({ section, promo }) {
  return (
    <Marquee autoFill speed={60} pauseOnHover delay={2} className="h-auto">
      <div className="w-full bg-gray-900 py-1 px-8 text-white flex justify-start items-center space-x-4 mb-5 md:text-lg text-base cursor-default mx-0 capitalize">
        <span>{section}</span>
        <span>{promo}</span>
        <span>**</span>
      </div>
    </Marquee>
  );
}
