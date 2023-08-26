import Strings from "../Shared/Strings";
export default function Header() {
  return (
    <div className="w-full flex justify-between fixed z-50 bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90% ...">
      <div className="h-24 w-24 flex justify-center">
        <p className=" font-bold text-3xl self-center  text-gray-300">
          <a href="#Home">H</a>
        </p>
      </div>
      <ul className="flex gap-10 mr-20 items-center  text-gray-300">
        {Strings.navList.map((nav) => (
          <li>
            <a href={`#${nav}`}>{nav}</a>
          </li>
        ))}
        <li>
          <a href="src/assets/Resume-Hadi Mokhtari.pdf" target="_blank">
            Resume
          </a>
        </li>
      </ul>
    </div>
  );
}
