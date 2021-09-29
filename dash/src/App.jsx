import Sidebar from "@/components/sidebar";
import Dashboard from "@/components/dashboard";
import SearchBar from "@/components/searchbar";
import ProfileBlock from "@/components/profileblock";

const App = () => {
  return (
    <div>
      <div className="grid grid-cols-10 min-h-screen overflow-hidden">
        <div id="sidebar" className="col-span-2 h-full bg-black p-5">
          <Sidebar />
        </div>
        <div id="content" className="col-span-8 h-full">
          <nav className="flex">
            <SearchBar />
            <ProfileBlock />
          </nav>
          <div className="p-5 h-full">
            <Dashboard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
