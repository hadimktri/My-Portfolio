import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
import { MdOutlineMail } from "react-icons/md";
export default function ContactMe() {
  return (
    <div className="p-4 w-full my-16 md:ml-40 md:w-3/4 flex flex-col items-center ">
      <div className="flex items-center self-start">
        <h2 className="md:text-xl font-medium">
          <span className=" text-teal-500 dark:text-teal-400 ">05-</span>
          Contact Me
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
      </div>
      <div className="flex flex-col self-center mt-16 gap-5 text-sm md:w-4/5 lg:w-3/4 ">
        <a
          className=" hover:scale-110  flex  gap-2"
          href="mailto:hadimokhtr@gmail.com"
          target="_blank"
        >
          <MdOutlineMail size={25} />
          <h2>Email: hadimokhtr@gmail.com </h2>
        </a>
        <a
          className=" hover:scale-110 flex gap-2"
          href="https://github.com/hadimktri/"
          target="_blank"
        >
          <TbBrandGithub size={25} />
          <h2>Github: https://github.com/hadimktri </h2>
        </a>
        <a
          className=" hover:scale-110  flex gap-2"
          href="https://www.linkedin.com/in/hadimokhtari/"
          target="_blank"
        >
          <TbBrandLinkedin size={25} />
          <h2>Linkedin: www.linkedin.com/in/hadimokhtari</h2>
        </a>
      </div>
    </div>
  );
}
