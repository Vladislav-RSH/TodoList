import AddButton from "./add-btn";
import Search from "./search";
import Task from "./task";
import React, { useState } from 'react';


export default function Dashboard() {

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };


  return (
    <section className="w-1/2 h-[97%] bg-teal-400 rounded-2xl flex flex-col items-center border-2 border-black px-12">
      <h1 className="text-6xl mt-8">ToDo List</h1>
      <div className="flex flex-row w-full mt-8">
        <Search />
        <AddButton onAddTask={handleAddTask} />
      </div>
      {tasks.map((task, index) => (
        <Task key={index} task={task.task} description={task.description} />
      ))}
    </section>
  );
}