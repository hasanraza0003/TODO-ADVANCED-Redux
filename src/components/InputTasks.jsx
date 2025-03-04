import { MdAddTask } from "react-icons/md";

const InputTasks = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <form
        action="/"
        className="flex items-center w-full max-w-lg bg-white rounded-2xl p-2 "
      >
        <input
          type="text"
          placeholder="Take A Note Here...."
          className="flex-1 bg-transparent p-2 px-4 placeholder:text-black/80 focus:outline-none"
        />
        <button type="submit" className="p-2">
          <MdAddTask className="text-3xl text-yellow-500 hover:scale-125 transition-all" />
        </button>
      </form>
    </div>
  );
};

export default InputTasks;
