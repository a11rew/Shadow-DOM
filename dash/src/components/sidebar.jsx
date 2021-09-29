import { MdDashboard } from "react-icons/md";
import { RiSettings4Fill, RiMore2Fill } from "react-icons/ri";

import imgUrl from "@/assets/asset_profile.png";

const Sidebar = () => {
  const name = "Marketing Team";

  return (
    <div className="text-white flex flex-col justify-between h-full">
      <section>
        <div className="flex gap-2 mb-7">
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

        <div>
          <h6 className="mb-3 opacity-50">MARKETING MODULE</h6>
          <div
            role="button"
            className="flex gap-3 bg-white text-black font-medium h-12 text-lg items-center rounded px-3"
          >
            <MdDashboard />
            <p>Dashboard</p>
          </div>
          <hr className="my-4 opacity-20" />
          <div
            role="button"
            className="flex gap-3 font-medium h-12 text-lg items-center rounded px-3 transition duration-100 hover:bg-white hover:text-black"
          >
            <RiSettings4Fill />
            <p>Settings</p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={imgUrl} role="button" className="h-10 rounded-full" />
          <p className="ml-2">Boris Johnson</p>
        </div>
        <div className="bg-[#333333] p-2 rounded" role="button">
          <RiMore2Fill />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
