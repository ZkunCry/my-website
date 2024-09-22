import React from "react";
import cn from "../../utils/cn";
import { variantsButton } from "../../utils/variants";
interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  className?: string; // если вы хотите явно указать className
  variant: keyof typeof variantsButton;
  type?: "button" | "submit" | "reset";
}
const Button: React.FC<ButtonProps> = ({
  className,
  children,
  type,
  variant,
  ...props
}) => {
  return (
    <button
      {...props}
      type={type}
      className={cn(variantsButton[variant], className)}
    >
      {children}
    </button>
  );
};

export default Button;
