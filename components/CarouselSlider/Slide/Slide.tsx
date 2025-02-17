import { useContext } from "react";
import { CarouselSlideContext } from "../CarouselSliderContext/Context";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
type Slide = {
  img: string;
  title: string;
  description: string;
  refStr: string;
};
export const Slide = ({ img, title, description, refStr }: Slide) => {
  const { widthCard } = useContext(CarouselSlideContext);
  return (
    <div
      style={{
        width: `${widthCard}`,
        maxWidth: `${widthCard}`,
        minWidth: `${widthCard}`,
        height: "auto",
      }}
      className={`card flex-1 self-stretch relative hover:-translate-y-4 transition-transform hover:transition-transform hover:duration-100 flex flex-col rounded-lg   max-w-[${widthCard}px]  p-2 gap-[32px]  w-[${widthCard}px] bg-slate-100 h-full`}
    >
      <div className="image w-full h-auto">
        <img
          className="rounded-lg aspect-video  max-w-full"
          src={img}
          alt="#"
        />
      </div>
      <div className="desc">
        <h1 className="text-[clamp(18px,3vw,1.9rem)] text-black font-bold">
          {title}
        </h1>
        <p className="text-card-desc text-[clamp(14px,3vw,1.3rem)]">
          {description}
        </p>
      </div>
      <div className="flex items-end flex-1 py-2 pb-5">
        <div className="ref relative  inline-flex items-center after:content-[''] after:w-full after:h-[2px]  after:bg-card-link after:absolute after:bottom-[-10px]">
          <Link
            to={refStr}
            className="text-[clamp(12px,3vw,1.15rem)] font-semibold z-10"
          >
            Click to view in github
          </Link>
          <ArrowUpRight />
        </div>
      </div>
      <Link to={refStr} className="absolute  z-[9] inset-0  " />
    </div>
  );
};
