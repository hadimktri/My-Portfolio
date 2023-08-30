import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function WeatherApp() {
  return (
    <div className="flex flex-col items-center gap-5 ">
      <div className="mt-16 md:w-10/12 ">
        <div className="flex">
          <RiArrowDropRightLine size={25} color="#2dd4bf" />
          <h2 className="text-lg font-bold text-slate-700 dark:text-slate-300">
            Weather App
          </h2>
        </div>
        <img
          src="src/assets/weather.png"
          alt="project-1"
          className=" mt-5 rounded"
        />
      </div>
      <div className="mt-10 flex flex-col md:w-10/12 md:flex-row gap-4">
        <div className="md:w-1/2 flex flex-col gap-3">
          <div className="flex gap-2">
            <div className=" hover:scale-125">
              <a
                href="https://github.com/hadimktri/Weather-App_React_Typescript_Vite"
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
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">
              React
            </span>
          </h5>
          <h5>
            Styling:
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">CSS</span>
          </h5>
          <h5>
            Synchronized weather data fetched with the help of
            <span className=" text-teal-500 dark:text-teal-400 ml-1 ">
              Rapid Api and Open weather Api
            </span>
            .
          </h5>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-xl text-slate-700 dark:text-slate-300 font-bold my-4 md:my-0">
            About App
          </h2>
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
