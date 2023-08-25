import { RiArrowDropRightLine } from "react-icons/ri";

export default function Projects() {
  return (
    <div className="pl-20 my-20 flex flex-col w-full text-gray-300">
      <div className="flex items-center justify-start w-full">
        <h2 className="text-xl ">
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
      <div className="mt-[150px] ml-10 flex flex-col gap-3">
        <h5>
          Front-End:
          <span className="text-teal-400 tracking-widest">
            {" "}
            React{" "}
            <span className="text-gray-300 tracking-widest">
              (Typescript, React-Routing, Zod, Zustand)
            </span>
          </span>
        </h5>
        <h5>
          Back-End:
          <span className="text-teal-400 tracking-widest">
            {" "}
            Node js{" "}
            <span className="text-gray-300 tracking-widest">
              (Typescript, Express, Prisma, Node Mailer)
            </span>
          </span>
        </h5>
        <h5>
          Styling:
          <span className="text-teal-400 tracking-widest"> Mantine Ui</span>
        </h5>
        <h5>
          DataBase:
          <span className="text-teal-400 tracking-widest">
            {" "}
            Postgress{" "}
            <span className="text-gray-300 tracking-widest">(Prisma)</span>
          </span>
        </h5>
        <h5>
          Authentication:
          <span className="text-teal-400 tracking-widest">
            {" "}
            JWT{" "}
            <span className="text-gray-300 tracking-widest">
              (JSON Web Token)
            </span>
          </span>
        </h5>
      </div>
    </div>
  );
}
