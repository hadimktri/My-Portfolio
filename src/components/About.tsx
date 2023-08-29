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
    <div className="px-4 w-full mt-40 md:ml-40 md:w-3/4 flex flex-col items-center ">
      <div className="flex items-center self-start">
        <h2 className="md:text-xl">
          <span className=" text-teal-500 dark:text-teal-400 ">01-</span>
          {Strings.about.link}
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
      </div>

      <div
        className="mt-10 flex flex-col items-center gap-5 md:w-4/5
       lg:flex-row-reverse lg:items-start xl:w-3/4"
      >
        <img
          src="src/assets/hadi.jpg"
          className="object-cover w-60 h-60 rounded-full border-solid border-8 p-2 box-content 
          border-teal-300 border-opacity-30
          dark:border-teal-200 dark:border-opacity-30"
        />
        <div className=" mt-10 flex flex-col gap-5">
          <div>
            <h2 className="text-slate-700 dark:text-slate-300 text-2xl font-bold">
              {Strings.about.name}
            </h2>
            <h2 className="text-xl text-teal-500 dark:text-teal-400 font-bold flex mt-4">
              {Strings.about.title}
            </h2>
          </div>
          <h2 className="sm:w-3/4 md:w-full">{Strings.about.desc}</h2>
          <h2 className="text-slate-700 dark:text-slate-300 font-bold">
            {Strings.about.skills}
          </h2>
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
              <li className="flex gap-2">
                <FaNodeJs color="green" size={22} />
                <span>Node Js</span>
              </li>
              <li className="flex gap-1 ">
                <TbBrandNextjs color="black" size={22} />
                <span>Next Js</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-2">
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
        </div>
      </div>
      <div id="Education" />
    </div>
  );
}
