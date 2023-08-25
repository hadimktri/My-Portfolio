import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="bg-gradient-to-r from-[#0a1526] from 5% via-[#0a244b] via-30% to-[#0a1526] to-90% ... w-full h-screen ">
      <div>
        <Header />
        <SideBar />
      </div>
    </div>
  );
}

export default App;
