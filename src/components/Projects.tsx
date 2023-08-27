import JewelryProject from "./Projects/JewelryProject";
import PostProject from "./Projects/PostProject";
import WeatherApp from "./Projects/WeatherApp";

export default function Projects() {
  return (
    <div className="pl-20 my-20 flex flex-col w-full text-gray-300">
      <PostProject />
      <WeatherApp />
      <JewelryProject />
      <div id="Experience" />
    </div>
  );
}
