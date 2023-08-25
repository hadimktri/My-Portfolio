import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
export default function SideBar() {
  return (
    <div className="w-24 fixed flex flex-col justify-end items-center h-full gap-10">
      {/* <h2 className="-rotate-90 tracking-widest mb-4 text-gray-300">FiND ME</h2> */}
      <div className="flex flex-col justify-center items-center mt-24 gap-10">
        <TbBrandGithub size={25} color="#d1d5db" />
        <TbBrandLinkedin size={25} color="#d1d5db" />
        <div className="flex justify-center flex-col items-center mb-24">
          <div className="w-1 h-1 bg-teal-400 rounded-full ml-[0.5px]"></div>
          <div className="h-[60px] border-r-[1px] border-gray-300"></div>
        </div>
      </div>
    </div>
  );
}
