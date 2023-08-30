import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";

import { motion } from "framer-motion";
import { TypingText } from "../utils/CustomTexts";

import { fadeIn, staggerContainer } from "../utils/motion";
export default function ContactMe() {
  return (
    <motion.div
      variants={staggerContainer(1,1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-4 w-full my-40 md:ml-40 md:w-3/4 flex flex-col items-center "
    >
      <div className="flex items-center self-start">
        <h2 className="md:text-xl">
          <span className=" text-teal-600 dark:text-teal-500 ">01-</span>
        </h2>
        <TypingText title="Contact Me" textStyles="md:text-xl" />
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="flex flex-col self-center mt-16 gap-5 text-sm md:w-4/5 lg:w-3/4 "
      >
        <a
          className=" hover:scale-110  flex  gap-2"
          href="mailto:hadimokhtr@gmail.com"
          target="_blank"
        >
          <MdOutlineMail size={25} />
          <h2>Email: hadimokhtr@gmail.com </h2>
        </a>
        <a
          className=" hover:scale-110 flex gap-2"
          href="https://github.com/hadimktri/"
          target="_blank"
        >
          <TbBrandGithub size={25} />
          <h2>Github: https://github.com/hadimktri </h2>
        </a>
        <a
          className=" hover:scale-110  flex gap-2"
          href="https://www.linkedin.com/in/hadimokhtari/"
          target="_blank"
        >
          <TbBrandLinkedin size={25} />
          <h2>Linkedin: www.linkedin.com/in/hadimokhtari</h2>
        </a>
      </motion.div>
    </motion.div>
  );
}
