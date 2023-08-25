import Content from "./components/Content";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90% ... w-full ">
      <Header />
      <div className="flex">
        <SideBar />
        <Content />
      </div>
    </div>
  );
}

export default App;
