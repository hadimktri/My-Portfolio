import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
export default function ContactMe() {
  return (
    <div className="pl-20 my-20 flex flex-col items-center w-full  h-[500px]  text-gray-300">
      <div className="flex items-center justify-start w-full">
        <h2 className="text-xl">
          <span className="text-teal-400 text-md tracking-widest">05-</span>
          Contact Me
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-40 m-3 mb-1"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2"></div>
      </div>
      <div className="flex flex-col self-start ml-16 mt-16 gap-5">
        <a
          className=" hover:scale-105  flex gap-2"
          href="mailto:hadimokhtr@gmail.com"
          target="_blank"
        >
          <MdOutlineMail size={25} color="#d1d5db" />
          <h2>Email: hadimokhtr@gmail.com </h2>
        </a>
        <a
          className=" hover:scale-105 flex gap-2"
          href="https://github.com/hadimktri/"
          target="_blank"
        >
          <TbBrandGithub size={25} color="#d1d5db" />
          <h2>Github: https://github.com/hadimktri </h2>
        </a>
        <a
          className=" hover:scale-105  flex gap-2"
          href="https://www.linkedin.com/in/hadimokhtari/"
          target="_blank"
        >
          <TbBrandLinkedin size={25} color="#d1d5db" />
          <h2>Linkedin: www.linkedin.com/in/hadimokhtari</h2>
        </a>
      </div>
    </div>
  );
}
