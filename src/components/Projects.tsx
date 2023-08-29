import JewelryProject from "./Projects/JewelryProject";
import PostProject from "./Projects/PostProject";
import WeatherApp from "./Projects/WeatherApp";

export default function Projects() {
  return (
    <div className="p-4 w-full my-40 md:ml-40 md:w-3/4 flex flex-col items-center ">
      <div className="flex items-center self-start">
        <h2 className="md:text-xl">
          <span className=" text-teal-500 dark:text-teal-400 ">04-</span>
          Projects
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
      </div>
      <PostProject />
      <WeatherApp />
      <JewelryProject />
      <div id="Experience" />
    </div>
  );
}
