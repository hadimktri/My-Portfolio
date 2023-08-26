import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
export default function SideBar() {
  return (
    <div className="w-24 fixed flex flex-col justify-end items-center h-full">
      <h2 className="-rotate-90 tracking-widest text-gray-300">FiND ME</h2>
      <div className="flex flex-col justify-center items-center mt-24 gap-10">
        <a
          className=" hover:scale-125"
          href="https://github.com/hadimktri/"
          target="_blank"
        >
          <TbBrandGithub size={25} color="#d1d5db" />
        </a>
        <a
          className=" hover:scale-125"
          href="https://www.linkedin.com/in/hadimokhtari/"
          target="_blank"
        >
          <TbBrandLinkedin size={25} color="#d1d5db" />
        </a>
        <div className="flex justify-center flex-col items-center mb-24">
          <div className="w-1 h-1 bg-teal-400 rounded-full ml-[0.5px]"></div>
          <div className="h-[60px] border-r-[1px] border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
