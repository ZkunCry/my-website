import React from "react";
interface HeaderProps extends React.HTMLProps<HTMLDivElement> {
  className?: string; // если вы хотите явно указать className
}
const Header: React.FC<HeaderProps> = ({ className, children, ...props }) => {
  return (
    <header className={className} {...props}>
      {children}
    </header>
  );
};

export default Header;
