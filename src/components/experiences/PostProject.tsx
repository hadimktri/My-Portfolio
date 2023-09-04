import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import S from "../../styles";

export default function PostProject() {
  return (
    <div className={`${S.flexCenter} flex-col gap-5`}>
      <div className="relative mt-16 lg:w-9/12 ">
        <div className="flex gap-3 mb-12 lg:-ml-20 items-center">
          <RiArrowDropRightLine size={30} color="#71717a" />
          <h2 className="text-lg font-bold">Full-Stack Post Blog App</h2>
          <div className=" hover:scale-125">
            <a href="https://github.com/hadimktri/Full-Stack-Post-Blog-App" target="_blank">
              <TbBrandGithub size={25} />
            </a>
          </div>
        </div>
        <img
          src="/p-1-w.jpg"
          alt="project-1"
          className="rounded md:-ml-10"
        />
        <img
          src="/p-1.jpg"
          alt="project-1"
          className="rounded absolute z-20 top-40 mt-11 md:-right-20 md:mr-10"
        />
      </div>
      <div className="mt-40 flex flex-col md:flex-row justify-between gap-5 lg:w-9/12">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-xl font-bold ">Technologies used in this app</h2>
          <h5>
            Front-End: <span className={S.highLight}> React </span>
            <span className="text-sm">
              {" "}
              (Typescript, React-Routing, Zod, Zustand).
            </span>
          </h5>
          <h5>
            Back-End: <span className={S.highLight}> Node js </span>{" "}
            <span className="text-sm">
              (Typescript, Express, Prisma, Node Mailer).
            </span>
          </h5>
          <h5>
            Styling: <span className={S.highLight}> Mantine Ui. </span>
          </h5>
          <h5>
            DataBase: <span className={S.highLight}> PostgreSQL </span>{" "}
            <span className="text-sm"> (Prisma).</span>
          </h5>
          <h5>
            Authentication: <span className={S.highLight}> JWT </span>{" "}
            <span className="text-sm"> (JSON Web Token).</span>
          </h5>
        </div>
        <div className="md:w-1/2 ">
          <h2 className="text-xl font-bold mb-3">About App</h2>
          <ul className="flex flex-col gap-3">
            <li>
              Registered user is able to{" "}
              <span className={S.highLight}>
                {" "}
                create, update, delete, like, favorite, comment{" "}
              </span>
              posts, but will not be able to delete or edit other users' posts.
            </li>
            <li>
              Users will be able to register with email and password and also
              just with a <span className={S.highLight}> Gmail </span> account.
            </li>
            <li>
              User will be able to{" "}
              <span className={S.highLight}>reset Password</span> with{" "}
              <span className={S.highLight}>Email confirmation code</span> in
              case of a forgotten password.{" "}
            </li>
            <li>
              <span className={S.highLight}> Dark / light </span> theme is also
              added for the convinience of the user.
            </li>
            <li>
              App is <span className={S.highLight}>fully responsive</span> in
              mobile, tablet, pc, and larg screens.{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
