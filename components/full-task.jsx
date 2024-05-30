import Menu from "../icons/menu";
import { useState } from "react";
import Task from "./task";
import CloseIcon from "../icons/close";
import CheckIcon from "../icons/check-icon";

export default function FullTask({ tasks, onDelete, onCheck }) {
  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(0);

  const btnShowForm = () => {
    setCount(count + 1);

    if (count === 1) {
      setShowForm(false);
      setCount(count - 1);
    } else {
      setShowForm(true);
    }
  };

  const handleCheck = (task) => {
    onCheck(task);
  };

  return (
    <div className="bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center">
      <div className="rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center">0</div>
      <button onClick={btnShowForm}>
        <Menu />
      </button>
      {showForm && (
        <div
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-96 h-1/2 border-2 border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto"
        >
          <button onClick={btnShowForm} className="bg-red-400 border-black w-8 h-8 rounded-[50%] border-2 flex items-center justify-center right-0 absolute top-2 right-2">
            <CloseIcon />
          </button>
          <h1 className="text-2xl mt-8">Full Tasks</h1>
          <div className="w-5/6 mb-6">
            {tasks.map((task, index) => (
              <Task
                key={index}
                task={task.task}
                onDelete={() => onDelete(task)}
                onCheck={() => handleCheck(task)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
import Menu from "../icons/menu";
import { useState } from "react";
import Task from "./task";
import CloseIcon from "../icons/close";
import CheckIcon from "../icons/check-icon";

export default function FullTask({ tasks, onDelete, onCheck }) {
  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(0);

  const btnShowForm = () => {
    setCount(count + 1);

    if (count === 1) {
      setShowForm(false);
      setCount(count - 1);
    } else {
      setShowForm(true);
    }
  };

  const handleCheck = (task) => {
    onCheck(task);
  };

  return (
    <div className="bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center">
      <div className="rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center">0</div>
      <button onClick={btnShowForm}>
        <Menu />
      </button>
      {showForm && (
        <div
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-96 h-1/2 border-2 border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto"
        >
          <button onClick={btnShowForm} className="bg-red-400 border-black w-8 h-8 rounded-[50%] border-2 flex items-center justify-center right-0 absolute top-2 right-2">
            <CloseIcon />
          </button>
          <h1 className="text-2xl mt-8">Full Tasks</h1>
          <div className="w-5/6 mb-6">
            {tasks.map((task, index) => (
              <Task
                key={index}
                task={task.task}
                onDelete={() => onDelete(task)}
                onCheck={() => handleCheck(task)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}