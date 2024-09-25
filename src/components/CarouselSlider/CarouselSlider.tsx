import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, type ImgHTMLAttributes } from "react";
import Portfolio1 from "../../assets/portfolio1.jpg";
import Portfolio2 from "../../assets/portfolio2.jpg";
import Portfolio3 from "../../assets/portfolio3.jpg";
type Slide = {
  img: React.ImgHTMLAttributes<HTMLImageElement>;
  description: string;
  ref: string;
};
interface CarouseSliderProps {
  width: string;
  height: string;
  className: string;
  slides: Slide[];
}
import "./CarouselSlider.css";
const CarouselSlider = ({
  width = "900",
  height = "700",
  slides = [],
}: CarouseSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const onScroll = (type: string) => {
    switch (type) {
      case "right":
        ref.current.scrollLeft = ref.current.scrollLeft + 200;
        break;
      case "left":
        ref.current.scrollLeft = ref.current.scrollLeft - 200;
        break;
    }
    return;
  };
  return (
    <div
      className={` w-[${width}px] max-h-[${height}px] h-1 min-h-[${height}px] py-3 px-5 overflow-hidden flex relative  rounded-lg`}
    >
      <ChevronLeft
        size={40}
        color={"black"}
        onClick={() => onScroll("left")}
        className="absolute cursor-pointer hover:bg-[#d1d5db] bg-slate-100 rounded-lg p-2 top-[50%] translate-y-[-50%] left-0 opacity-[0.8]"
      />
      <div
        ref={ref}
        className="card-container py-2 flex w-full h-full overflow-x-scroll scroll-smooth items-center gap-x-4"
      >
        <div className="card flex flex-col rounded-lg   max-w-[500px] min-w-[500px] max-h-[500px] p-2 gap-3  w-[500px] bg-slate-100 h-full">
          <div className="image w-full  h-[300px]">
            <img
              className=" rounded-lg h-full w-full"
              src={Portfolio1}
              alt="#"
            />
          </div>
          <div className="desc">
            <h1 className="text-[1.5rem] text-black font-bold">
              Assistent student
            </h1>
            <p className="text-black">
              A website for students, teachers and university staff.
            </p>
          </div>
        </div>
        <div className="card flex flex-col gap-3  rounded-lg  max-w-[500px] min-w-[500px] max-h-[500px]  p-2  w-[300px] bg-slate-100 h-full">
          <div className="image w-full h-[300px]">
            <img
              className=" rounded-lg h-full w-full"
              src={Portfolio2}
              alt="#"
            />
          </div>
          <div className="desc">
            <h1 className="text-[1.5rem] text-black font-bold">Laptop</h1>
            <p className="text-black">
              Website about selling and renting laptops
            </p>
          </div>
        </div>
        <div className="card  flex flex-col gap-3 rounded-lg   max-w-[500px] min-w-[500px] max-h-[500px]  p-2  w-[300px] bg-slate-100 h-full">
          <div className="image w-full  h-[300px]">
            <img
              className=" rounded-lg h-full w-full"
              src={Portfolio3}
              alt="#"
            />
          </div>
          <div className="desc">
            <h1 className="text-[1.5rem] text-black font-bold">
              React admin panel
            </h1>
            <p className="text-black">
              Admin panel created using react and redux for the surguapp web
              application
            </p>
          </div>
        </div>
      </div>

      <ChevronRight
        size={40}
        color="black"
        onClick={() => onScroll("right")}
        className="absolute cursor-pointer bg-slate-100  hover:bg-[#d1d5db] rounded-lg p-2 top-[50%] translate-y-[-50%] right-0 opacity-[0.8]"
      />
    </div>
  );
};

export default CarouselSlider;
