import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandMantine,
} from "react-icons/tb";
import Strings from "../../Shared/Strings";
import { BiLogoReact } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import Animate from "../../utils/Animate";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motions";
import S from "../../styles";

export default function About() {
  return (
    <Animate title="About Me" number={1}>
      <div
        className={`${S.flexCenter} flex-col lg:flex-row-reverse  lg:items-start md:justify-between gap-5 `}
      >
        <motion.img
          variants={fadeIn("up", "tween", 0.3, 1)}
          src="/hadi.jpg"
          alt="hadi"
          className="object-cover w-60 h-60 rounded-full border-solid border-8 p-2 box-content 
          dark:border-[#847ba1] dark:border-opacity-20
          border-[#6a5cad] border-opacity-10 "
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 0.8)}
          className=" flex flex-col gap-5"
        >
          <div>
            <h2 className="text-2xl font-bold">{Strings.about.name}</h2>
            <h2 className={`${S.highLight} text-xl font-bold flex mt-4`}>
              {Strings.about.title}
            </h2>
          </div>
          <h2 className={`${S.secondary} lg:w-4/5`}>{Strings.about.desc}</h2>
          <h2 className=" font-bold">{Strings.about.skills}</h2>
          <div className="flex justify-between w-4/5">
            <ul className="flex flex-col gap-2">
              <li className="flex gap-1 ">
                {<TbBrandHtml5 color="red" size={22} />}
                <span> HTML </span>
              </li>
              <li className="flex gap-1 ">
                <TbBrandCss3 color="blue" size={22} />
                <span> CSS</span>
              </li>
              <li className="flex gap-1 ">
                <BiLogoReact color="cyan" size={22} />
                <span>React</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-1 ">
                <TbBrandJavascript color="#facc15" size={22} />
                <span>JavaScript</span>
              </li>
              <li className="flex gap-1">
                <FaNodeJs color="#16a34a" size={22} />
                <span>Node Js</span>
              </li>
              <li className="flex gap-1 ">
                <SiPhp color="#6a5cad" size={25} />
                <span>php</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="flex gap-1 ">
                <div className=" text-black dark:text-slate-500">
                  <TbBrandNextjs size={22} />
                </div>
                <span>Next Js</span>
              </li>
              <li className="flex gap-1">
                <TbBrandTailwind color="#0ea5e9" size={22} />
                <span>Tailwind</span>
              </li>
              <li className="flex gap-1 ">
                <TbBrandMantine color="#2563eb" size={22} />
                <span>Mantine</span>
              </li>
              <li></li>
            </ul>
          </div>
        </motion.div>
      </div>
      <div id="Education" className="h-24" />
    </Animate>
  );
}
