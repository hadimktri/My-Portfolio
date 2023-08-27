import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function JewelryProject() {
  return (
    <div>
      <div className="mt-20">
        <div className="flex mb-5 ">
          <RiArrowDropRightLine size={25} color="#2dd4bf" />
          <h2 className="text-xl">Jewelry Project</h2>
        </div>
        <img
          src="src/assets/jewelry.jpg"
          alt="project-1"
          className="w-3/4 rounded"
        />
      </div>
      <div className="mt-10 flex justify-between">
        <div className="w-1/2 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className=" hover:scale-125">
              <a
                href="https://github.com/hadimktri/NODE_MongoDb_Express_Passport-Google_Ejs"
                target="_blank"
              >
                <TbBrandGithub size={25} />
              </a>
            </div>
            <h2 className="text-xl text-violet-200 font-bold tracking-widest">
              Technologies used in this app
            </h2>
          </div>
          <h5>
            Front-End:
            <span className="text-teal-400 ml-1 tracking-widest">EJS</span>
          </h5>
          <h5>
            Back-End:
            <span className="text-teal-400 ml-1 tracking-widest">Node js</span>
          </h5>
          <h5>
            Styling:
            <span className="text-teal-400 ml-1 tracking-widest">
              Bootstrap
            </span>
          </h5>
          <h5>
            DataBase:
            <span className="text-teal-400 ml-1 tracking-widest">MongoDb</span>
          </h5>
          <h5>
            Authentication:
            <span className="text-teal-400 ml-1 tracking-widest">Passport</span>
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
                Select, Add to card, delete, order
              </span>
              product.
            </li>
            <li>
              Users will be able to register with email and password and also
              just with a <span className="text-teal-400 mr-1">Gmail </span>
              account.
            </li>
            <li>
              User will be able to
              <span className="text-teal-400 mx-1">Edit profile</span>with
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
