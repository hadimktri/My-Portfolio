import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import S from "../../styles";

export default function JewelryProject() {
  return (
    <div className={`${S.flexCenter} flex-col gap-5`}>
      <div className="mt-16 lg:w-9/12">
        <div className="flex gap-3 mb-12 lg:-ml-20 items-center">
          <RiArrowDropRightLine size={30} color="#71717a"/>
          <h2 className="text-lg font-bold">Jewelry Project</h2>
          <div className=" hover:scale-125">
            <a
              href="https://github.com/hadimktri/full-stack-E-commerce"
              target="_blank"
            >
              <TbBrandGithub size={25} />
            </a>
          </div>
        </div>
        <img
          src="/jewelry.jpg"
          alt="project-1"
          className=" mt-5 rounded"
        />
      </div>
      <div className="mt-8 flex flex-col lg:w-9/12 md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-xl font-bold ">Technologies used in this app</h2>
          <h5>
            Front-End: <span className={S.highLight}> EJS </span>
          </h5>
          <h5>
            Back-End: <span className={S.highLight}> Node js </span>
          </h5>
          <h5>
            Styling: <span className={S.highLight}> Bootstrap </span>
          </h5>
          <h5>
            DataBase: <span className={S.highLight}> MongoDb </span>
          </h5>
          <h5>
            Authentication: <span className={S.highLight}> Passport </span>
          </h5>
        </div>
        <div className="md:w-1/2 ">
          <h2 className="text-xl font-bold  my-4 md:my-0">About App</h2>
          <ul className="flex flex-col gap-3">
            <li>
              Registered user is able to{" "}
              <span className={S.highLight}>
                {" "}
                Select, Add to card, delete, order{" "}
              </span>{" "}
              product.
            </li>
            <li>
              Users will be able to register with email and password and also
              just with a <span className={S.highLight}> Gmail </span> account.
            </li>
            <li>
              User will be able to{" "}
              <span className={S.highLight}> Edit profile </span> with{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
