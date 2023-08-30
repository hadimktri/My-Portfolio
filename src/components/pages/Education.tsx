import Strings from "../../Shared/Strings";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/CustomTexts";

import { fadeIn, staggerContainer } from "../../utils/motion";
export default function Education() {
  return (
    <motion.div
      variants={staggerContainer(0,0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-4 w-full mt-40 md:ml-40 md:w-3/4 flex flex-col items-center "
    >
      <div className="flex items-center self-start">
        <h2 className="md:text-xl">
          <span className=" text-teal-600 dark:text-teal-500 ">02-</span>
        </h2>
        <TypingText title="Education" textStyles="md:text-xl" />
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="mt-14 flex flex-col items-start gap-6 w-full lg:items-center"
      >
        {Strings.Education.map((item, idx) => (
          <div key={idx} className="md:w-4/5 lg:w-3/4 ">
            <div className="flex flex-col md:flex-row md:justify-between ">
              <h2 className="font-bold text-slate-700 dark:text-slate-300">
                {item.title}
              </h2>
              <h2>{item.year}</h2>
            </div>
            <h2>{item.school}</h2>
          </div>
        ))}
      </motion.div>
      <div id="Projects" />
    </motion.div>
  );
}
