import {
  TbBrandHtml5,
  TbBrandCss3,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandMantine,
} from "react-icons/tb";
import Strings from "../Shared/Strings";
import { BiLogoReact } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
export default function About() {
  return (
    <div className="pl-20 my-20 flex flex-col items-center w-full text-gray-300">
      <div className="flex items-center justify-start w-full">
        <h2 className="text-xl">
          <span className="text-teal-400 text-md tracking-widest">01-</span>
          {Strings.about.link}
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-40 m-3 mb-1"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2"></div>
      </div>
      <div className="flex justify-around w-4/5 mt-10">
        <div>
          <div className="min-w-[300px]">
            <h2 className="text-2xl mt-10 font-bold flex justify-self-start">
              {Strings.about.name}
            </h2>
            <h2 className="text-xl mt-5 text-teal-400 font-bold flex justify-self-start tracking-widest">
              {Strings.about.title}
            </h2>
          </div>
          <h2 className=" text-md mt-5  pr-12 flex justify-self-start tracking-widest">
            {Strings.about.desc}
          </h2>
          <h2 className=" text-md mt-5  font-bold tracking-widest">
            {Strings.about.skills}
          </h2>
          <div className="flex justify-between w-3/4 mt-4">
            <ul>
              <li className="flex gap-2 mt-2">
                {<TbBrandHtml5 color="red" size={22} />}
                <span> HTML</span>
              </li>
              <li className="flex gap-2 mt-2">
                <TbBrandCss3 color="blue" size={22} />
                <span> CSS</span>
              </li>
              <li className="flex gap-2 mt-2">
                <BiLogoReact color="cyan" size={22} />
                <span>React</span>
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 mt-2">
                <TbBrandJavascript color="#facc15" size={22} />
                <span>JavaScript</span>
              </li>
              <li className="flex gap-2 mt-2">
                <FaNodeJs color="green" size={22} />
                <span>Node Js</span>
              </li>
              <li className="flex gap-2 mt-2">
                <TbBrandNextjs color="black" size={22} />
                <span>Next Js</span>
              </li>
            </ul>
            <ul>
              <li className="flex gap-2 mt-2">
                <TbBrandTailwind color="#0ea5e9" size={22} />
                <span>Tailwind</span>
              </li>
              <li className="flex gap-2 mt-2">
                <TbBrandMantine color="#2563eb" size={22} />
                <span>Mantine Ui</span>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <img
          src="src/assets/hadi.jpg"
          className=" object-cover m-10 w-60 h-60 rounded-full border-solid border-8 border-teal-100 p-2 box-content border-opacity-30 "
        />
      </div>
      <div id="Education" />
    </div>
  );
}
