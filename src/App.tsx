import { createContext } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

export interface IThemeContext {
  dark: boolean;
  toggleTheme?: () => void;
}
export const ThemeContext = createContext<IThemeContext>({ dark: true });

function App() {
  return (
    <>
      <Header />
      <div className=" bg-white dark:bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90% flex w-full">
        <SideBar />
        <Content />
      </div>
    </>
  );
}

export default App;

{
  /* <div
className={`${
  !dark
    ? "last:bg-gradient-to-r from-[#d4e4fc] from 5% via-[#ecf1f7] via-30% to-[#d4e4fc] to-90% "
    : "last:bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90% "
} flex  w-full`}
> */
}
