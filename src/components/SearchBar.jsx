import { BsSearchHeart } from "react-icons/bs";
const SearchBar = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <form
        action="/"
        className="flex items-center w-full max-w-lg bg-yellow-100 rounded-2xl p-2 my-2 "
      >
        <input
          type="text"
          placeholder="Search Tasks Here...."
          className="flex-1 bg-transparent p-2 px-4 placeholder:text-black/80 focus:outline-none"
        />
        <button type="submit" className="p-2">
          <BsSearchHeart className="text-3xl  hover:scale-125 transition-all" />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
