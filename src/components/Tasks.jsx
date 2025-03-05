import { MdDeleteSweep } from "react-icons/md";
import { IoCloudDoneSharp } from "react-icons/io5";
import { BsBalloonFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../redux/tasksSlice";
import { FaSkullCrossbones } from "react-icons/fa";

const Tasks = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-yellow-100 rounded-3xl p-2 m-2 flex justify-between ">
      <div className="flex justify-center items-center">
        <BsBalloonFill className="text-lg m-2 hover:transform hover:-translate-y-2 hover:scale-125 transition-all" />
        <h2
          className={`text-md text-black/80 font-semibold ${
            data.completed ? " line-through text-red-500 " : ""
          } `}
        >
          {data.text}
        </h2>
      </div>

      <div className="flex justify-center items-center">
        <MdDeleteSweep
          onClick={() => dispatch(removeTask(data.id))}
          className="text-2xl text-red-500/80 m-2 hover:transform hover:rotate-[25deg] hover:scale-125  transition-all"
        />

        {!data.completed ? (
          <IoCloudDoneSharp
            onClick={() => dispatch(toggleTask(data.id))}
            className="text-2xl text-green-500/80 m-2 hover:transform hover:rotate-[25deg] hover:scale-125  transition-all"
          />
        ) : (
          <FaSkullCrossbones
            onClick={() => dispatch(toggleTask(data.id))}
            className="text-xl text-red-500/80 m-2 hover:transform hover:rotate-[25deg] hover:scale-125  transition-all"
          />
        )}
      </div>
    </div>
  );
};

export default Tasks;
