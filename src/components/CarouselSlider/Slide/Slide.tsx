import { useContext } from "react";
import { CarouselSlideContext } from "../CarouselSliderContext/Context";
type Slide = {
  img: string;
  title: string;
  description: string;
  refStr: string;
};
export const Slide = ({ img, title, description, refStr }: Slide) => {
  const { widthCard, heightCard } = useContext(CarouselSlideContext);
  return (
    <div
      style={{
        width: `${widthCard}px`,
        maxWidth: `${widthCard}px`,
        minWidth: `${widthCard}px`,
        maxHeight: `${heightCard}px`,
      }}
      className={`card flex flex-col rounded-lg   max-w-[${widthCard}px] min-w-[${widthCard}px] max-h-[${heightCard}px] p-2 gap-3  w-[${widthCard}px] bg-slate-100 h-full`}
    >
      <div className="image w-full h-[300px]">
        <img className="rounded-lg h-full w-full" src={img} alt="#" />
      </div>
      <div className="desc">
        <h1 className="text-[1.5rem] text-black font-bold">{title}</h1>
        <p className="text-black">{description}</p>
      </div>
    </div>
  );
};
