import React, { useState } from 'react';
import React, { useState } from 'react';
import AddButton from "./add-btn";
import FullTask from "./full-task";
import CompletedTask from "./completed-task";
import FullTask from "./full-task";
import CompletedTask from "./completed-task";
import Search from "./search";
import TaskNoIcon from './task-no-icon';
import TaskNoIcon from './task-no-icon';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [fullTasks, setFullTasks] = useState([]);
  const [complTask, setComplTask] = useState([]);
  const [count, setCount] = useState(1);
  const [fullTasks, setFullTasks] = useState([]);
  const [complTask, setComplTask] = useState([]);
  const [count, setCount] = useState(1);

  const handleAddTask = (task) => {
    setCount(count + 1);
    setFullTasks([task,...fullTasks]);
    
    if (count > 4) {
      tasks.pop();
      setTasks([task,...tasks]);
    } else {
      setTasks([task,...tasks]);
    }
  }
    setCount(count + 1);
    setFullTasks([task,...fullTasks]);
    
    if (count > 4) {
      tasks.pop();
      setTasks([task,...tasks]);
    } else {
      setTasks([task,...tasks]);
    }
  }

  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t!== task));
    setFullTasks(fullTasks.filter((t) => t!== task));
    setComplTask(complTask.filter((t) => t!== task));
    setCount(count - 1);
  };

  const handleCheckTask = (task) => {
    setComplTask([...complTask, task]);
    setFullTasks(fullTasks.filter((t) => t!== task));
    const updatedTasks = tasks.filter((t) => t!== task);
    setTasks(updatedTasks);
	setCount(count - 1);
  const handleDeleteTask = (task) => {
    setTasks(tasks.filter((t) => t!== task));
    setFullTasks(fullTasks.filter((t) => t!== task));
    setComplTask(complTask.filter((t) => t!== task));
    setCount(count - 1);
  };

  const handleCheckTask = (task) => {
    setComplTask([...complTask, task]);
    setFullTasks(fullTasks.filter((t) => t!== task));
    const updatedTasks = tasks.filter((t) => t!== task);
    setTasks(updatedTasks);
	setCount(count - 1);
  };

  return (
    <section className="w-1/2 h-[97%] bg-teal-400 rounded-2xl border-2 border-black px-12 ">
      <div className="flex justify-between items-center p-0 mt-6">
        <CompletedTask tasks={complTask}/>
        <FullTask tasks={fullTasks} onDelete={handleDeleteTask} onCheck={handleCheckTask}/>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl mt-6">ToDo List</h1>
        <div className="flex flex-row w-full mt-8">
          <Search />
          <AddButton onAddTask={handleAddTask}/>
        </div>
        {tasks.map((task, index) => (
          <TaskNoIcon
            key={index}
            task={task.task}
            description={task.description}
            index={index}
            onDelete={handleDeleteTask}
            onCheck={handleCheckTask}
          />
        ))}
      </div>
    <section className="w-1/2 h-[97%] bg-teal-400 rounded-2xl border-2 border-black px-12 ">
      <div className="flex justify-between items-center p-0 mt-6">
        <CompletedTask tasks={complTask}/>
        <FullTask tasks={fullTasks} onDelete={handleDeleteTask} onCheck={handleCheckTask}/>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-6xl mt-6">ToDo List</h1>
        <div className="flex flex-row w-full mt-8">
          <Search />
          <AddButton onAddTask={handleAddTask}/>
        </div>
        {tasks.map((task, index) => (
          <TaskNoIcon
            key={index}
            task={task.task}
            description={task.description}
            index={index}
            onDelete={handleDeleteTask}
            onCheck={handleCheckTask}
          />
        ))}
      </div>
    </section>
  );
}