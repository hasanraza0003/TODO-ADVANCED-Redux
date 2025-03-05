import { useSelector } from "react-redux";
import Tasks from "./Tasks";

const TasksList = () => {
  const { tasks, searchTerm } = useSelector((state) => state.tasks);
  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <>
      <div className="flex flex-col justify-center items-center w-full m-2">
        {filteredTasks.length ? (
          filteredTasks.map((curElem) => <Tasks key={curElem.id} data={curElem} />)
        ) : (
          <p className="text-black/80 bg-yellow-100 p-4 w-full rounded-2xl">No Tasks Found....</p>
        )}
      </div>
    </>
  );
};

export default TasksList;
