import { MdDashboard } from "react-icons/md";
import { RiSettings4Fill } from "react-icons/ri";

const Sidebar = () => {
  const name = "Dev Team";
  return (
    <div className="text-white flex flex-col h-full">
      <div className="flex gap-2 mb-5">
        <div className="flex items-center">
          <img
            src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}&length=1&size=40`}
            className="rounded"
          />
        </div>
        <div className="flex flex-col">
          <b>{name}</b>
          <p>10 employees</p>
        </div>
      </div>

      <section>
        <h6 className="mb-3 text-sm opacity-50">MARKETING MODULE</h6>
        <div
          role="button"
          className="flex gap-4 bg-white text-black font-medium h-12  text-xl items-center rounded px-3"
        >
          <MdDashboard />
          <p>Dashboard</p>
        </div>
        <hr className="my-4 opacity-20" />
        <div
          role="button"
          className="flex gap-4 font-medium h-12 text-xl items-center rounded px-3"
        >
          <RiSettings4Fill />
          <p>Settings</p>
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
