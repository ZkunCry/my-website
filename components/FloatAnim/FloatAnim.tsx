import { ReactNode } from "react";
interface FloatAnimProps {
  children: ReactNode;
}

export const FloatAnim: React.FC<FloatAnimProps> = ({ children }) => (
  <div className="flex-1 relative float-anim">{children}</div>
);
