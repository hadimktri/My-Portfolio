import { TbMenu2, TbMoon, TbSunHigh, TbX } from "react-icons/tb";
import Strings from "../Shared/Strings";
import { useState } from "react";
import useColorMode from "../hooks/useColorMode";
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleBurger = () => {
    setOpen((prev) => !prev);
  };
  const [colorMode, setColorMode] = useColorMode();
  const toggleTheme = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <div
      className="w-full flex justify-between fixed z-50  tracking-wide
    bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90%"
    >
      <div className="h-16 w-24 flex justify-center">
        <a
          className="font-bold text-3xl self-center ml-[-24px] md:ml-0 mt-1 text-gray-300"
          href="#Home"
        >
          H
        </a>
      </div>
      <div className="flex my-5 md:my-0 md:mr-14 md:items-center ">
        <ul
          className={` ${!open && "hidden"} w-20 flex flex-col gap-1 md:flex 
           md:flex-row md:gap-6 md:w-full md:items-baseline`}
        >
          <li
            onClick={toggleTheme}
            className="cursor-pointer md:order-last md:self-center mt-1"
          >
            {colorMode === "dark" ? (
              <TbSunHigh color="yellow" size={20} />
            ) : (
              <TbMoon color="#2dd4bf" size={20} />
            )}
          </li>
          {Strings.navList.map((nav, idx) => (
            <li
              key={idx}
              className=" text-sm text-gray-300 hover:border-b-[1px] mt-2 hover:scale-105"
            >
              <a href={`#${nav}`}>{nav}</a>
            </li>
          ))}
          <li>
            <a
              className="text-sm hover:border-b-[1px] text-gray-300"
              href="src/assets/Resume-Hadi Mokhtari.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
        <div onClick={handleBurger} className="md:hidden w-12 ml-4">
          {open ? <TbX size={25} /> : <TbMenu2 size={25} />}
        </div>
      </div>
    </div>
  );
}
