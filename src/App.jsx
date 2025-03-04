import { LuListTodo } from "react-icons/lu";
import SearchBar from "./components/SearchBar";
import TasksList from "./components/TasksList";
import InputTasks from "./components/InputTasks";



function App() {
  return (
    <>
      <div className="w-full h-full pt-[10vh] bg-black/80 flex flex-col justify-center items-center">
        <div className="w-full flex justify-center items-center my-20">
          <LuListTodo className="text-9xl mx-2 text-yellow-300" />
          <h1 className="font-bold text-8xl text-yellow-300 font-sans">
            Todo App
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SearchBar />
          <InputTasks />
          <TasksList />
        </div>
      </div>
    </>
  );
}

export default App;
