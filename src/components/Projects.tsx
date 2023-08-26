import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
export default function Projects() {
  return (
    <div className="pl-20 my-20 flex flex-col w-full text-gray-300">
      <div className="flex items-center justify-start w-full">
        <h2 className="text-xl">
          <span className="text-teal-400 text-md tracking-widest ">03-</span>
          Some Things I've Built
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-40 m-3 mb-1"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2"></div>
      </div>
      <div className="mt-20 relative">
        <div className="flex mb-5 ">
          <RiArrowDropRightLine size={25} color="#2dd4bf" />
          <h2 className="text-xl">Full-Stack Project </h2>
        </div>
        <img
          src="src/assets/p-1.jpg"
          alt="project-1"
          className="w-3/4 rounded"
        />
        <img
          src="src/assets/p-1-w.jpg"
          alt="project-1"
          className="w-3/4 rounded absolute z-20 top-32 mt-11 right-7"
        />
      </div>
      <div className="mt-[150px] flex justify-between">
        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className=" hover:scale-125">
              <a href="https://github.com/hadimktri/Full-Stack" target="_blank">
                <TbBrandGithub size={25} />
              </a>
            </div>
            <h2 className="text-xl text-violet-200 font-bold tracking-widest">
              Technologies used in this app
            </h2>
          </div>
          <h5>
            Front-End:
            <span className="text-teal-400 ml-1 tracking-widest">
              React
              <span className="text-gray-300 ml-1 tracking-widest">
                (Typescript, React-Routing, Zod, Zustand).
              </span>
            </span>
          </h5>
          <h5>
            Back-End:
            <span className="text-teal-400 ml-1 tracking-widest">
              Node js
              <span className="text-gray-300 ml-1 tracking-widest">
                (Typescript, Express, Prisma, Node Mailer).
              </span>
            </span>
          </h5>
          <h5>
            Styling:
            <span className="text-teal-400 ml-1 tracking-widest">
              Mantine Ui.
            </span>
          </h5>
          <h5>
            DataBase:
            <span className="text-teal-400 ml-1 tracking-widest">
              Postgress
              <span className="text-gray-300 ml-1 tracking-widest">
                (Prisma).
              </span>
            </span>
          </h5>
          <h5>
            Authentication:
            <span className="text-teal-400 ml-1 tracking-widest">
              JWT
              <span className="text-gray-300 ml-1 tracking-widest">
                (JSON Web Token).
              </span>
            </span>
          </h5>
        </div>
        <div className="w-1/2 pl-2">
          <h2 className="text-xl text-violet-200 font-bold tracking-widest mb-3">
            About App
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              Registered user is able to
              <span className="text-teal-400 mx-1">
                create, update, delete, like, favorite, comment
              </span>
              posts, but will not be able to delete or edit other users' posts.
            </li>
            <li>
              Users will be able to register with email and password and also
              just with a <span className="text-teal-400 mr-1">Gmail </span>
              account.
            </li>
            <li>
              User will be able to
              <span className="text-teal-400 mx-1">reset Password</span>with
              <span className="text-teal-400 mx-1">
                Email confirmation code
              </span>
              in case of a forgotten password.
            </li>
            <li>
              <span className="text-teal-400 mr-1">Dark / light</span> theme is
              also added for the convinience of the user.
            </li>
            <li>
              App is
              <span className="text-teal-400 mx-1">fully responsive</span>
              in mobile, tablet, pc, and larg screens.
            </li>
          </ul>
        </div>
      </div>
      <div id="Experience" />
    </div>
  );
}
