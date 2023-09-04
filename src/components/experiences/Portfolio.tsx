import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import S from "../../styles";

export default function Portfolio() {
  return (
    <div className={`flex flex-col lg:items-center gap-5 `}>
      <div className="lg:w-9/12 ">
        <div className="flex gap-3 mb-12 lg:-ml-20 items-center">
          <RiArrowDropRightLine size={30} color="#71717a" />
          <h2 className="text-lg font-bold">My portfolio</h2>
          <div className=" hover:scale-125">
            <a href="https://github.com/hadimktri/My-Portfolio" target="_blank">
              <TbBrandGithub size={25} />
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-9/12 md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-xl font-bold ">Technologies used in this code</h2>
          <h5>
            Front-End:
            <span className={S.highLight}> React </span>{" "}
            <span className="text-sm">(Typescript).</span>
          </h5>
          <h5>
            Styling:
            <span className={S.highLight}> Tailwind CSS</span>
          </h5>
          <h5>
            Animation <span className={S.highLight}> Framer Motion </span>
          </h5>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold my-4 md:mt-0">About Coding</h2>
          <ul className="flex flex-col gap-3">
            <li>
              App is <span className={S.highLight}>fully responsive</span> in
              mobile, tablet, pc, and larg screens.{" "}
            </li>
            <li>
                            <span className={S.highLight}>
                Componet-based coding, Higher-Order components and Custom Hooks{" "}
              </span>{" "}
              are implemented in order to have a simple, efficient and reusable code.
            </li>
            <li>
              <span className={S.highLight}> Tailwind </span> is used to make
              the styling easier and cleaner.{" "}
            </li>
            <li>
              <span className={S.highLight}> Dark / light </span> theme is also
              added for the convinience of the user.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
