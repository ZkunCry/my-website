import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Buttons";
const Burger: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setTimeout(() => {
        setIsOpen(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="relative contents ">
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center justify-center z-10 w-10 h-10 bg-[#5E3BEE] text-white rounded-md focus:outline-none"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      <div
        onClick={() => setIsOpen(false)}
        className={`fixed invisible inset-0 bg-black bg-opacity-50 transition-[opacity,visibility] duration-300 ease-in-out ${
          isOpen ? "opacity-100 z-[30] !visible" : "opacity-0 z-0 "
        }`}
      />

      <div
        ref={menuRef}
        className={`fixed z-[100] top-0 right-0 h-full w-[300px] bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-[150%]"
        }`}
      >
        <ul className="flex lg:flex-row flex-col h-full gap-[60px]  justify-center  lg:items-baseline  text-[1.25rem] gap-x-[2.5rem] text-header-text font-bold">
          <li>
            <Link
              className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
              to={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
              to={""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-hover-link hover:text-white-text px-3 py-2 rounded-lg "
              to={""}
            >
              About me
            </Link>
          </li>
          <li>
            <Button variant="primary">Contact me</Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;
