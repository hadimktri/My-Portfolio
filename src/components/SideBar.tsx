import { TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";
export default function SideBar() {
  return (
    <div className="w-24 fixed flex flex-col justify-center items-center mt-24 h-full gap-10">
      <h2 className="-rotate-90 tracking-widest mb-11">FiND ME</h2>

      <div className="flex flex-col justify-center items-center mt-24 gap-10">
        <div className="flex justify-center flex-col items-center">
          <div className="w-1 h-1 bg-green-600 rounded-full"></div>
          <div className="h-[60px] border-r-[1px] "></div>
        </div>

        <TbBrandGithub size={25} />
        <TbBrandLinkedin size={25} />
      </div>
    </div>
  );
}
