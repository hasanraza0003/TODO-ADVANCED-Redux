import { MdAddTask } from "react-icons/md";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasksSlice";

const InputTasks = () => {
  const [task,setTask]=useState("");
  const dispatch =useDispatch();

  const handleAddTask = () =>{
    if(task.trim()){
      dispatch(addTask(task));
      setTask("");
    }
  }

  return (
    <div className="flex justify-center items-center w-full">
      <div
        className="flex items-center w-full max-w-lg bg-white rounded-2xl p-2 "
      >
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Take A Note Here...."
          className="flex-1 bg-transparent p-2 px-4 placeholder:text-black/80 focus:outline-none"
        />
        <button type="submit" className="p-2" onClick={handleAddTask} >
          <MdAddTask className="text-3xl text-yellow-500 hover:scale-125 transition-all" />
        </button>
      </div>
    </div>
  );
};

export default InputTasks;
