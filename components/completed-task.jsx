import { useState } from "react";
import CloseIcon from "../icons/close";
import CheckIcon from "../icons/check-icon";
import TaskNoIcon from "./task-no-icon";

export default function CompletedTask({ tasks }) {
  const [showForm, setShowForm] = useState(false);

  const btnShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center">
      <div className="rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center">0</div>
      <button onClick={btnShowForm}>
        <CheckIcon />
      </button>
      {showForm && (
        <div
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-96 h-1/2 border-2 
          border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto"
        >
          <button onClick={btnShowForm} className="bg-red-400 border-black w-8 h-8 rounded-[50%] border-2 flex items-center justify-center right-0 absolute top-2 right-2">
            <CloseIcon />
          </button>
          <h1 className="text-2xl mt-8">Completed Task</h1>
          <div className="w-5/6 mb-6">
            {tasks.map((task, index) => (
              <TaskNoIcon key={index} task={task.task} description={task.description} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
import { useState } from "react";
import CloseIcon from "../icons/close";
import CheckIcon from "../icons/check-icon";
import TaskNoIcon from "./task-no-icon";

export default function CompletedTask({ tasks }) {
  const [showForm, setShowForm] = useState(false);

  const btnShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center">
      <div className="rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center">0</div>
      <button onClick={btnShowForm}>
        <CheckIcon />
      </button>
      {showForm && (
        <div
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-96 h-1/2 border-2 
          border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto"
        >
          <button onClick={btnShowForm} className="bg-red-400 border-black w-8 h-8 rounded-[50%] border-2 flex items-center justify-center right-0 absolute top-2 right-2">
            <CloseIcon />
          </button>
          <h1 className="text-2xl mt-8">Completed Task</h1>
          <div className="w-5/6 mb-6">
            {tasks.map((task, index) => (
              <TaskNoIcon key={index} task={task.task} description={task.description} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}