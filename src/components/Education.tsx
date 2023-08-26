import Strings from "../Shared/Strings";

export default function Education() {
  return (
    <div className="pl-20 my-20 flex flex-col w-full text-gray-300">
      <div className="flex items-center justify-start w-full">
        <h2 className="text-xl">
          <span className="text-teal-400 text-md tracking-widest">02-</span>
          Education
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-40 m-3 mb-1"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2"></div>
      </div>
      <div className="mt-10 ml-[120px]">
        {Strings.Education.map((item) => (
          <div className="mt-10 w-3/4">
            <div className="flex justify-between">
              <h2 className="font-bold text-xl">{item.title}</h2>
              <h2 className="text-gray-400">{item.year}</h2>
            </div>
            <h2 className="text-gray-400 mt-3">{item.school}</h2>
          </div>
        ))}
      </div>
      <div id="Projects" />
    </div>
  );
}
