import Strings from "../Shared/Strings";

export default function Education() {
  return (
    <div className="px-4 w-full mt-40 md:ml-40 md:w-3/4 flex flex-col items-center ">
      <div className="flex items-center self-start">
      <h2 className="md:text-xl" >
          <span className=" text-teal-500 dark:text-teal-400 ">02-</span>
          Education
        </h2>
        <div className=" border-b-[1px] border-gray-700 w-32 m-3 mb-1" />
        <div className="w-1 h-1 bg-gray-600 rounded-full mt-2" />
      </div>

      <div className="mt-14 flex flex-col items-start gap-6 w-full lg:items-center">
        {Strings.Education.map((item,idx) => (
          <div key={idx} className="md:w-4/5 lg:w-3/4 ">
            <div className="flex flex-col md:flex-row md:justify-between ">
              <h2 className="font-bold text-slate-700 dark:text-slate-300">{item.title}</h2>
              <h2>{item.year}</h2>
            </div>
            <h2>{item.school}</h2>
          </div>
        ))}
      </div>
      <div id="Projects" />
    </div>
  );
}
