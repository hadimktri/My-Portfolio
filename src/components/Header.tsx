export default function Header() {
  const navList = ["About", "Experience", "Work", "Contact"];
  return (
    <div className="w-full flex justify-between fixed">
      <div className="h-24 w-24 flex justify-center">
        <p className=" font-bold text-3xl self-center">H</p>
      </div>
      <ul className="flex gap-10 pr-10 items-center">
        {navList.map((nav) => (
          <li>{nav}</li>
        ))}
      </ul>
    </div>
  );
}
