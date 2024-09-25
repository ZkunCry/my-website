import { createContext } from "react";
type CarouseSlideContextType = {
  widthCard: string;
  heightCard: string;
};
export const CarouselSlideContext = createContext<CarouseSlideContextType>({
  widthCard: "",
  heightCard: "",
});
