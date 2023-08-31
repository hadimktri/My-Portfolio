import { ReactNode } from "react";
import { motion } from "framer-motion";
import { TypingText } from "../../utils/CustomTexts";
import { fadeIn, staggerContainer } from "../../utils/motions";
import Styles from "../../styles";

export default function Animate({
  children,
  title,
  number,
}: {
  children: ReactNode;
  title: string;
  number: number;
}) {
  return (
    <motion.div
      variants={staggerContainer(0, 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="w-full flex flex-col items-center justify-center "
    >
      <div className="md:text-xl flex self-start items-center">
        <span className={Styles.teal}>{number}-</span>
        <TypingText title={title} />
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
      </div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 0.8)}
        className={`${Styles.innerPadding} w-full lg:w-9/12`}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
