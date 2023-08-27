import { RiArrowDropRightLine } from "react-icons/ri";
import { TbBrandGithub } from "react-icons/tb";

export default function WeatherApp() {
  return (
    <div className="mt-10 flex flex-col items-center tracking-widest">
      <div className="mt-20 self-start">
        <div className="flex mb-5">
          <RiArrowDropRightLine size={25} color="#2dd4bf" />
          <h2 className="text-xl">Weather App</h2>
        </div>
      </div>
      <img
        src="src/assets/weather.png"
        alt="project-1"
        className="w-3/4 my-5 rounded"
      />
      <div className="mt-10 flex tracking-widest w-10/12 ">
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
            <h2 className="text-xl text-violet-200 font-bold ">
              Technologies used in this app
            </h2>
          </div>
          <h5>
            Front-End:
            <span className="text-teal-400 ml-1 ">React</span>
          </h5>
          <h5>
            Styling:
            <span className="text-teal-400 ml-1 ">CSS</span>
          </h5>
          <h5>
            Synchronized weather data fetched with the help of
            <span className="text-teal-400 ml-1 ">
              Rapid Api and Open weather Api
            </span>
            .
          </h5>
        </div>
        <div className="w-1/2 pl-2">
          <h2 className="text-xl text-violet-200 font-bold  mb-3">About App</h2>
          <ul className="flex flex-col gap-3">
            <li>
              Users will be able to search for a city by inserting partial or
              full city names. A debounced selection drop-down is intended to enhance the user interface experience to select the city properly.
            </li>
            <li>Bottom line of the application lists the forecast for upcoming 7 days.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
