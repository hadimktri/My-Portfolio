import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function PostProject() {
  return (
    <div className="flex flex-col items-center gap-5 md:w-4/5">
      <div className="mt-16 relative">
        <div className="flex mb-5">
          <RiArrowDropRightLine size={25} color="#2dd4bf" />
          <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
            Full-Stack Project
          </h2>
        </div>
        <img
          src="src/assets/p-1-w.jpg"
          alt="project-1"
          className="md:w-4/5  rounded"
        />
        <img
          src="src/assets/p-1.jpg"
          alt="project-1"
          className=" rounded absolute z-20 md:w-4/5 top-32 mt-11 md:right-20"
        />
      </div>
      <div className="mt-[150px] flex flex-col md:flex-row justify-between gap-10">
        <div className="md:w-1/2 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className=" hover:scale-125">
              <a href="https://github.com/hadimktri/Full-Stack" target="_blank">
                <TbBrandGithub size={25} />
              </a>
            </div>
            <h2 className="text-xl text-slate-700 dark:text-slate-300 font-bold ">
              Technologies used in this app
            </h2>
          </div>
          <h5>
            Front-End:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">
              React
              <span className="text-slate-700 dark:text-slate-300 text-sm ml-1 ">
                (Typescript, React-Routing, Zod, Zustand).
              </span>
            </span>
          </h5>
          <h5>
            Back-End:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">
              Node js
              <span className="text-slate-700 dark:text-slate-300 text-sm ml-1 ">
                (Typescript, Express, Prisma, Node Mailer).
              </span>
            </span>
          </h5>
          <h5>
            Styling:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">Mantine Ui.</span>
          </h5>
          <h5>
            DataBase:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">
              PostgreSQL
              <span className="text-slate-700 dark:text-slate-300 text-sm ml-1 ">(Prisma).</span>
            </span>
          </h5>
          <h5>
            Authentication:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">
              JWT
              <span className="text-slate-700 dark:text-slate-300 text-sm ml-1 ">
                (JSON Web Token).
              </span>
            </span>
          </h5>
        </div>
        <div className="md:w-1/2 ">
          <h2 className="text-xl text-slate-700 dark:text-slate-300 font-bold  mb-3">About App</h2>
          <ul className="flex flex-col gap-3">
            <li>
              Registered user is able to
              <span className=" text-teal-500 dark:text-teal-400 mx-1">
                create, update, delete, like, favorite, comment
              </span>
              posts, but will not be able to delete or edit other users' posts.
            </li>
            <li>
              Users will be able to register with email and password and also
              just with a <span className=" text-teal-500 dark:text-teal-400 mr-1">Gmail </span>
              account.
            </li>
            <li>
              User will be able to
              <span className=" text-teal-500 dark:text-teal-400 mx-1">reset Password</span>with
              <span className=" text-teal-500 dark:text-teal-400 mx-1">
                Email confirmation code
              </span>
              in case of a forgotten password.
            </li>
            <li>
              <span className=" text-teal-500 dark:text-teal-400 mr-1">Dark / light</span> theme is
              also added for the convinience of the user.
            </li>
            <li>
              App is
              <span className=" text-teal-500 dark:text-teal-400 mx-1">fully responsive</span>
              in mobile, tablet, pc, and larg screens.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
