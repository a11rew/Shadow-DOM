import Sidebar from "@/components/sidebar";
import Dashboard from "@/components/dashboard";
import SearchBar from "@/components/searchbar";
import ProfileBlock from "@/components/profileblock";

const App = () => {
  return (
    <body className="grid grid-cols-10 h-screen overflow-hidden">
      <div id="sidebar" className="col-span-2 bg-black p-5">
        <Sidebar />
      </div>
      <div id="content" className="col-span-8 h-full">
        <nav className="flex border-b">
          <SearchBar />
          <ProfileBlock />
        </nav>
        <div className="p-5 h-full">
          <Dashboard />
        </div>
      </div>
    </body>
  );
};

export default App;
