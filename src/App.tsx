import { createContext } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import useColorMode from "./hooks/useColorMode";

export interface IThemeContext {
  colorMode: string;
  toggleTheme?: () => void;
}
export const ThemeContext = createContext<IThemeContext>({
  colorMode: "light",
});

function App() {
  const [colorMode, setColorMode] = useColorMode();
  const toggleTheme = () => {
    setColorMode(colorMode === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ colorMode, toggleTheme }}>
      <div className=" text-slate-700 dark:text-slate-300 scroll-smooth">
        <Header />
        <div
          className="flex
       bg-slate-200 dark:bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90%"
        >
          <SideBar />
          <Content />
        </div>
      </div>
    </ThemeContext.Provider>
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
