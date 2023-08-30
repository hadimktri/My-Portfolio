import JewelryProject from ".././projects/JewelryProject";
import PostProject from ".././projects/PostProject";
import WeatherApp from ".././projects/WeatherApp";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/CustomTexts";

import { staggerContainer } from "../../utils/motion";
export default function Projects() {
  return (
    <>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="p-4 w-full mt-40 md:ml-40 md:w-3/4 flex flex-col items-center "
      >
        <div className="flex items-center self-start">
          <h2 className="md:text-xl">
            <span className=" text-teal-600 dark:text-teal-500 ">01-</span>
          </h2>
          <TypingText title="Projects" textStyles="md:text-xl" />
          <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
          <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
        </div>
      </motion.div>
      <div className="p-4 w-full  md:ml-40 md:w-3/4 flex flex-col items-center ">
        <PostProject />
        <WeatherApp />
        <JewelryProject />
        <div id="Experience" />
      </div>
    </>
  );
}
