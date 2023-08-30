import { createContext } from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
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
      <div className=" text-slate-700 dark:text-slate-300 w-full h-full overflow-hidden ">
        <NavBar />
        <div
          className="flex"
        >
          <SideBar />
          <Content />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;

