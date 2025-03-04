import { MdDeleteSweep } from "react-icons/md";
import { MdEditSquare } from "react-icons/md";
import { BsBalloonFill } from "react-icons/bs";

const Tasks = ({ data }) => {
  return (
    <div className="w-full bg-yellow-100 rounded-3xl p-2 m-4 flex justify-between ">
      <div className="flex justify-center items-center">
        <BsBalloonFill className="text-lg m-2 hover:transform hover:-translate-y-2 hover:scale-125 transition-all" />
        <h2 className="text-md text-black/80 font-semibold">{data}</h2>
      </div>

      <div className="flex justify-center items-center">
        <MdDeleteSweep className="text-2xl text-red-500/80 m-2 hover:transform hover:rotate-[25deg] hover:scale-125  transition-all" />
        <MdEditSquare className="text-xl text-green-600/90 m-2 hover:transform hover:rotate-[25deg] hover:scale-125  transition-all" />
      </div>
    </div>
  );
};

export default Tasks;
