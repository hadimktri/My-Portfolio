import { motion } from "framer-motion";
import { TypingText } from "../utils/CustomTexts";

import { fadeIn, staggerContainer } from "../utils/motion";
export default function Experience() {
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
        <TypingText title="Experience" textStyles="md:text-xl" />
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
      </div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="flex flex-col self-center mt-16 gap-5 text-sm md:w-4/5 lg:w-3/4 "
      >
     
      </motion.div>
      <div id="Contact" />
    </motion.div>
  );
}
