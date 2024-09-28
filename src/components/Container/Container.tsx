import * as React from "react";
import cn from "../../utils/cn";

interface ContainerProps extends React.HTMLProps<HTMLDivElement> {
  className?: string; // если вы хотите явно указать className
}

const Container: React.FC<ContainerProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("w-full px-[16px] lg:px-[85px]", className)} {...props}>
      {children}
    </div>
  );
};

export default Container;
