import { motion } from "framer-motion";
import { TypingText } from "../../utils/CustomTexts";

import { fadeIn, staggerContainer } from "../../utils/motion";
import Strings from "../../Shared/Strings";
export default function Experience() {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="px-4 w-full my-40 md:ml-40 md:w-3/4 flex flex-col items-center "
    >
      <div className="flex items-center self-start">
        <h2 className="md:text-xl">
          <span className=" text-teal-600 dark:text-teal-500 ">01-</span>
        </h2>
        <TypingText title="Work Experience" textStyles="md:text-xl" />
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className="mt-14 flex flex-col items-start gap-6 w-full lg:items-center"
      >
        {Strings.Experience.map((item) => (
          <div key={item.id} className="md:w-4/5 lg:w-3/4 ">
            <div className="flex flex-col md:flex-row md:justify-between ">
              <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                {item.title}
              </h2>
              <h2 className="text-sm">{item.year}</h2>
            </div>
            <h2 className="mt-4 w-4/5 lg:w-3/4 ">{item.desc}</h2>
            <ul className="list-disc ml-5 md:ml-10 mt-2">
              {item.descList.map((el, i) => (
                <li key={i}>{el}</li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
      <div id="Contact" />
    </motion.div>
  );
}
