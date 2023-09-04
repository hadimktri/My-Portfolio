import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";
import S from "../../styles";

export default function WeatherApp() {
  return (
    <div className={`${S.flexCenter} flex-col gap-5 `}>
      <div className="mt-16 lg:w-9/12">
        <div className="flex gap-3 mb-12 lg:-ml-20 items-center">
          <RiArrowDropRightLine size={30} color="#71717a" />
          <h2 className="text-lg font-bold">Weather App</h2>
          <div className=" hover:scale-125">
            <a
              href="https://github.com/hadimktri/Weather-App"
              target="_blank"
            >
              <TbBrandGithub size={25} />
            </a>
          </div>
        </div>
        <img
          src="/weather.png"
          alt="project-1"
          className=" mt-8 rounded"
        />
      </div>
      <div className="mt-8 flex flex-col lg:w-9/12 md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-3">
          <h2 className="text-xl font-bold ">Technologies used in this app</h2>
          <h5>
            Front-End:
            <span className={S.highLight}> React </span>
          </h5>
          <h5>
            Styling:
            <span className={S.highLight}> CSS </span>
          </h5>
          <h5>
            Synchronized weather data fetched with the help of{" "}
            <span className={S.highLight}>
              {" "}
              Rapid Api and Open weather Api{" "}
            </span>{" "}
            .{" "}
          </h5>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold my-4 md:my-0">About App</h2>
          <ul className="flex flex-col gap-3">
            <li>
              Users will be able to search for a city by inserting partial or
              full city names. A debounced selection drop-down is intended to
              enhance the user interface experience to select the city properly.
            </li>
            <li>
              Bottom line of the application lists the forecast for upcoming 7
              days.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
