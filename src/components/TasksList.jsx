import Tasks from "./Tasks";

const tasks = [
        { id: 1, title: "Buy groceries" },
        { id: 2, title: "Complete React project" },
        { id: 3, title: "Call the bank" },
        { id: 4, title: "Schedule a doctor’s appointment" },
        { id: 5, title: "Finish reading a book" },
        { id: 6, title: "Exercise for 30 minutes" },
        { id: 7, title: "Reply to emails" },
        { id: 8, title: "Plan weekend trip" },
        { id: 9, title: "Water the plants" },
        { id: 10, title: "Organize workspace" },
        { id: 11, title: "Update resume" },
        { id: 12, title: "Pay electricity bill" },
        { id: 13, title: "Write a blog post" },
        { id: 14, title: "Prepare for Monday’s meeting" },
        { id: 15, title: "Clean the house" }
      ];
      

const TasksList = () => {
  return (
    <>
      <div className="flex justify-start w-full m-4">
        <ul>
          {tasks.map((curElem) => (
            <li key={curElem.id}>
              <Tasks data={curElem.title} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TasksList;
