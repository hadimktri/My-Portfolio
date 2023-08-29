import Strings from "../Shared/Strings";
export default function Intro() {
  return (
    <>
      <div id="Home" />
      <div
        className="px-4 flex flex-col gap-5
         md:ml-40 md:w-3/4 mt-20 md:mt-40"
      >
        <h5 className="text-lg">Hello, my name is</h5>
        <h1 className=" text-teal-600 dark:text-teal-500 font-bold text-5xl md:text-6xl">
          Hadi Mokhtari.
        </h1>
        <h1 className=" text-slate-700 dark:text-slate-200 font-bold text-3xl md:text-4xl">
          I build things for the web
        </h1>
        <h2 className="sm:w-3/4 md:w-4/5">{Strings.INTRO}</h2>
        <div id="About" />
      </div>
    </>
  );
}
