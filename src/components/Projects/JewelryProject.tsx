import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function JewelryProject() {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="mt-16 md:w-10/12 ">
        <div className="flex">
          <RiArrowDropRightLine size={25} color="#2dd4bf" />
          <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">Jewelry Project</h2>
        </div>
        <img
          src="src/assets/jewelry.jpg"
          alt="project-1"
          className=" my-5 rounded"
        />
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:w-10/12 ">
        <div className="md:w-1/2 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className=" hover:scale-125">
              <a
                href="https://github.com/hadimktri/NODE_MongoDb_Express_Passport-Google_Ejs"
                target="_blank"
              >
                <TbBrandGithub size={25} />
              </a>
            </div>
            <h2 className="text-xl text-slate-700 dark:text-slate-300 font-bold ">
              Technologies used in this app
            </h2>
          </div>
          <h5>
            Front-End:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">EJS</span>
          </h5>
          <h5>
            Back-End:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">Node js</span>
          </h5>
          <h5>
            Styling:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">Bootstrap</span>
          </h5>
          <h5>
            DataBase:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">MongoDb</span>
          </h5>
          <h5>
            Authentication:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">Passport</span>
          </h5>
        </div>
        <div className="md:w-1/2 ">
          <h2 className="text-xl text-slate-700 dark:text-slate-300 font-bold  my-4 md:my-0">
            About App
          </h2>
          <ul className="flex flex-col gap-3">
            <li>
              Registered user is able to
              <span className=" text-teal-500 dark:text-teal-400 mx-1">
                Select, Add to card, delete, order
              </span>
              product.
            </li>
            <li>
              Users will be able to register with email and password and also
              just with a <span className=" text-teal-500 dark:text-teal-400 mr-1">Gmail </span>
              account.
            </li>
            <li>
              User will be able to
              <span className=" text-teal-500 dark:text-teal-400 mx-1">Edit profile</span>with
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
