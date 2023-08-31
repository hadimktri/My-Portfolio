import JewelryProject from ".././projects/JewelryProject";
import PostProject from ".././projects/PostProject";
import WeatherApp from ".././projects/WeatherApp";

import { motion } from "framer-motion";
import { TypingText } from "../../utils/CustomTexts";
import { staggerContainer } from "../../utils/motions";
import Styles from "../../styles";

export default function Projects() {
  return (
    <div className={`${Styles.flexCenter} flex-col w-full`}>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex"
      >
        <div className={`${Styles.flexCenter} md:text-xl`}>
          <span className={Styles.teal}>3-</span>
          <TypingText title="Projects" />
          <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
          <div className="w-1 h-1 bg-teal-600 rounded-full mt-2" />
        </div>
      </motion.div>
      <div className={`${Styles.innerPadding} w-full`}>
        <PostProject />
        <WeatherApp />
        <JewelryProject />
        <div id="Experience" className="h-24" />
      </div>
    </div>
  );
}
