import Strings from "../../Shared/Strings";
import S from "../../styles";
import { slideIn, staggerContainer, textVariant } from "../../utils/motions";
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <>
      <div id="Home" className="h-28 md:h-56" />
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className=" md:ml-8 lg:ml-16 md:mb-24"
      >
        <motion.h5 variants={textVariant(1.1)} className="text-lg">
          Hello, my name is
        </motion.h5>
        <motion.h1
          variants={textVariant(1.2)}
          className={`${S.textGradient} font-extrabold text-5xl md:text-6xl mt-6 w-fit`}
        >
          Hadi Mokhtari.
        </motion.h1>
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className={`${S.innerPadding} relative`}
        >
          <h1 className=" text-slate-700 dark:text-slate-200 font-bold text-3xl md:text-4xl">
            I build things for the web
          </h1>
          <h2 className=" lg:w-2/3 mt-6 md:mt-8">{Strings.INTRO}</h2>
        </motion.div>
      </motion.div>
        <div id="About" className="h-24" />
    </>
  );
}
