import Strings from "../Shared/Strings";
export default function Intro() {
  return (
    <div className="my-20">
      <h5 className="mt-14 pl-20 text-gray-400 tracking-wide text-xl">
        Hello, my name is
      </h5>
      <h1 className="mt-8 pl-20 text-teal-400 pr-40 font-bold text-7xl tracking-wide">
        Hadi Mokhtari.
      </h1>
      <h1 className="mt-10 pl-20 text-gray-400 pr-40 font-bold text-5xl tracking-wide">
        I build things for the web
      </h1>
      <h2 className="mt-10 pl-20 text-gray-300 w-1/2 text-md tracking-wideest">
        {Strings.INTRO}
      </h2>
    </div>
  );
}
