import { TbHomeUp, TbMenu2, TbMoon, TbSunHigh, TbX } from "react-icons/tb";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motions";
import Strings from "../Shared/Strings";
import { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import S from "../styles";
import useScrollDirection from "../hooks/useScrollDirection";

export default function NavBar() {
  const { colorMode, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);
  const [logo, setLogo] = useState(false);

  const scrollDirection = useScrollDirection();

  const handleBurger = () => {
    setOpen((prev) => !prev);
  };

  const handleLogo = (el: boolean) => {
    setLogo(el);
  };

  useEffect(() => {
    setOpen(false);
  }, [scrollDirection]);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${S.gradient} ${
        scrollDirection === "down" ? "-top-20" : "top-0"
      } w-full flex justify-between fixed z-50 tracking-wide`}
    >
      <div
        className="h-20 w-24 flex justify-center"
        onMouseOver={() => handleLogo(true)}
        onMouseLeave={() => handleLogo(false)}
      >
        <a
          className="font-bold text-3xl self-center ml-[-24px] md:ml-0 mt-1 hover:scale-125"
          href="#Home"
        >
          {!logo ? "H" : <TbHomeUp size={25} />}
        </a>
      </div>
      <div className={`${S.flexCenter} my-5 md:my-0 md:mr-14`}>
        <ul
          className={` ${!open && "hidden"} w-20 flex flex-col gap-1 md:flex 
           md:flex-row md:gap-6 md:w-full md:items-baseline`}
        >
          <li
            onClick={toggleTheme}
            className=" w-fit cursor-pointer md:order-last md:self-center p-1 rounded-full
             hover:border-[#2563eb] hover:dark:border-[#fcd34d] border-transparent border hover:border-current"
          >
            <div>
              {colorMode === "dark" ? (
                <TbSunHigh color="#fcd34d" size={20} />
              ) : (
                <TbMoon color="#2563eb" size={20} />
              )}
            </div>
          </li>
          {Strings.navList.map((nav, idx) => (
            <li
              key={idx}
              onClick={handleBurger}
              className=" text-sm md:text-base hover:border-b-[1px] mt-2 hover:scale-110 border-[#334155] dark:border-[#cbd5e1]"
            >
              <a href={`#${nav}`}>{nav}</a>
            </li>
          ))}
          <li>
            <a
              className="text-sm md:text-base hover:border-b-[1px] border-[#334155] dark:border-[#cbd5e1]"
              href="src/assets/Resume-Hadi Mokhtari.pdf"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
        <div
          onClick={handleBurger}
          className="md:hidden w-12 ml-4 cursor-pointer self-start"
        >
          {open ? <TbX size={25} /> : <TbMenu2 size={25} />}
        </div>
      </div>
    </motion.nav>
  );
}
