import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef } from "react";
import { Slide } from "./Slide/Slide";
import "./CarouselSlider.css";
import { CarouselSlideContext } from "./CarouselSliderContext/Context";

interface CarouselSliderProps {
  width?: string; // Сделаем параметры опциональными
  height?: string;
  widthCard: string;
  className?: string; // Сделаем параметры опциональными
  heightCard: string;
  children: React.ReactNode;
}

const CarouselSlider = ({
  width = "100%",
  height = "100%",
  widthCard,
  heightCard,
  children,
  className = "", // Добавим значение по умолчанию
}: CarouselSliderProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const onScroll = (type: string) => {
    if (ref.current) {
      switch (type) {
        case "right":
          ref.current.scrollLeft += 300;
          break;
        case "left":
          ref.current.scrollLeft -= 300;
          break;
      }
    }
  };

  return (
    <CarouselSlideContext.Provider
      value={{ widthCard, heightCard }} // Упрощаем синтаксис
    >
      <div
        style={{
          width: width,
          minHeight: height,
        }}
        className={`  h-1  overflow-hidden flex relative rounded-lg ${className}`}
      >
        <ChevronLeft
          size={40}
          color={"black"}
          onClick={() => onScroll("left")}
          className="absolute cursor-pointer hover:bg-[#d1d5db] bg-slate-100 rounded-lg p-2 top-[50%] translate-y-[-50%] left-0 opacity-[0.8]"
        />
        <div
          ref={ref}
          className="card-container  flex w-full h-full overflow-x-scroll scroll-smooth items-center gap-x-4"
        >
          {children}
        </div>
        <ChevronRight
          size={40}
          color="black"
          onClick={() => onScroll("right")}
          className="absolute cursor-pointer bg-slate-100 hover:bg-[#d1d5db] rounded-lg p-2 top-[50%] translate-y-[-50%] right-0 opacity-[0.8]"
        />
      </div>
    </CarouselSlideContext.Provider>
  );
};

CarouselSlider.Slide = Slide;
export default CarouselSlider;
