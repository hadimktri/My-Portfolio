import { createContext } from "react";
import Contents from "./components/Contents";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import useColorMode from "./hooks/useColorMode";
import S from "./styles/index";

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
      <div className={`${S.primary} w-full h-full overflow-hidden`}>
        <NavBar />
        <div className={`${S.gradient} flex`}>
          <SideBar />
          <Contents />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
