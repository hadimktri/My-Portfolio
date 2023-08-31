import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motions";
export default function SideBar() {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="hidden w-24 fixed md:flex flex-col justify-end items-center h-full"
    >
      <h2 className="-rotate-90 tracking-widest">FiND ME</h2>
      <div className="flex flex-col justify-center items-center mt-32 gap-10">
        <a
          className=" hover:scale-125"
          href="https://github.com/hadimktri/"
          target="_blank"
        >
          <TbBrandGithub size={25} />
        </a>
        <a
          className=" hover:scale-125"
          href="https://www.linkedin.com/in/hadimokhtari/"
          target="_blank"
        >
          <TbBrandLinkedin size={25} />
        </a>
        <div className="flex justify-center flex-col items-center">
          <div className="w-1 h-1 bg-teal-600 rounded-full ml-[0.5px]" />
          <div className="h-[100px] border-r-[1px] border-slate-700" />
        </div>
      </div>
    </motion.div>
  );
}
