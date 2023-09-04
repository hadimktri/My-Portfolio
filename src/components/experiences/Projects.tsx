import { motion } from "framer-motion";
import { TypingText } from "../../utils/CustomTexts";
import { staggerContainer } from "../../utils/motions";
import S from "../../styles";
import Portfolio from "./Portfolio";
import PostProject from "./PostProject";
import WeatherApp from "./WeatherApp";
import JewelryProject from "./JewelryProject";

export default function Projects() {
  return (
    <div className={`${S.flexCenter} flex-col w-full`}>
      <motion.div
        variants={staggerContainer(0, 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full flex"
      >
        <div className={`${S.flexCenter} md:text-xl`}>
          <span className={S.highLight}>3-</span>
          <TypingText title="Projects" />
          <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
          <div className="w-1 h-1 bg-zinc-600 rounded-full mt-2" />
        </div>
      </motion.div>
      <div className={`${S.innerPadding} w-full`}>
        <Portfolio />
        <PostProject />
        <WeatherApp />
        <JewelryProject />
        <div id="Experience" className="h-24" />
      </div>
    </div>
  );
}
