import { TbMenu2, TbX } from "react-icons/tb";
import Strings from "../Shared/Strings";
import { useState } from "react";
export default function Header() {
  const [open, setOpen] = useState(false);
  const handleBurger = () => {
    setOpen((prev) => !prev);
  };
  console.log(open);
  return (
    <div className="w-full flex justify-between fixed z-50 bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90% ...">
      <div className="h-14 w-24 flex justify-center">
        <a
          className="font-bold text-3xl self-center ml-[-24px] md:ml-0 mt-1 text-gray-300"
          href="#Home"
        >
          H
        </a>
      </div>

      <ul className=" flex-col my-4 mx-5 items-center flex ">
        <li
          className=" self-end cursor-pointer  hover:scale-110 md:hidden"
          onClick={handleBurger}
        >
          {open ? <TbX size={20} /> : <TbMenu2 size={25} />}
        </li>
        <div
          className={`${
            !open ? "hidden" : ""
          } md:flex md:gap-5 md:items-baseline md:pr-10`}
          onClick={handleBurger}
        >
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
              className="text-sm hover:border-b-[1px]  text-gray-300"
              href="src/assets/Resume-Hadi Mokhtari.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </div>
      </ul>
    </div>
  );
}
