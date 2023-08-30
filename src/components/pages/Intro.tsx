import Strings from "../../Shared/Strings";

import { slideIn, staggerContainer, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className={`sm:pl-16 pl-6`}>
      <div id="Home" />
      <motion.div
        variants={staggerContainer(0,0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="flex flex-col gap-5
    md:ml-40 md:w-3/4 my-20 md:my-48"
      >
        <motion.h5 variants={textVariant(1.1)} className="text-lg">
          Hello, my name is
        </motion.h5>
        <motion.h1
          variants={textVariant(1.2)}
          className=" text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-purple-800 to-pink-700 font-extrabold text-5xl md:text-6xl"
        >
          Hadi Mokhtari.
        </motion.h1>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="relative w-full md:mt-[20px] mt-[12px]"
        >
          <h1 className=" text-slate-700 dark:text-slate-200 font-bold text-3xl md:text-4xl">
            I build things for the web
          </h1>
          <h2 className="sm:w-3/4 md:w-4/5  md:mt-[32px] mt-[12px]">{Strings.INTRO}</h2>
        </motion.div>
      </motion.div>
      <div id="About" />
      </section>
  );
}
