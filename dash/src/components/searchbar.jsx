import { RiSearch2Line } from "react-icons/ri";

const SearchBar = () => {
  return (
    <div className="w-full">
      <div className="flex gap-3 p-5 border-b">
        <RiSearch2Line className="text-xl" role="button" />
        <input
          className="w-full outline-none"
          placeholder="Search for data, users..."
        ></input>
      </div>
    </div>
  );
};

export default SearchBar;
