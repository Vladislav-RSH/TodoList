import React, { useState } from 'react';

export default function AddButton({ onAddTask }) {

  const [showForm, setShowForm] = useState(false);
  const [count, setCount] = useState(0);
  const [inputTask, setInputTask] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [warn, setWarn] = useState(false);

  const inputTaskChange = (event) => {
    setInputTask(event.target.value);
  }

  const inputDescriptionChange = (event) => {
    setInputDescription(event.target.value);
  }

  const btnShowForm = (event) => {
    event.preventDefault();

    setCount(count + 1);

    if (count === 1) {
      setShowForm(false);
      setInputTask('');
      setInputDescription('');
      setCount(0);
    }

    else {
      setShowForm(true);
    }
  }

  const addTask = (event) => {
    event.preventDefault();

    if (inputTask === '') {
      setWarn(true);
    }

    else {
      onAddTask({task: inputTask, description: inputDescription});
      setInputTask('');
      setInputDescription('');
      setShowForm(false);
      setCount(0);
      setWarn(false);
    }
  }

  return (
    <div className="w-full bg-green-600 border-2 rounded-xl border-black flex justify-center items-center">
      <button onClick={btnShowForm}>New Task</button>
      {showForm && 
      <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16">
        <form className="flex justify-center items-center flex-col bg-green-600 p-6 rounded-xl border-2 border-black" onSubmit={addTask}>
          <input
          value={inputTask}
          onChange={inputTaskChange}
          className="p-2 mt-6 bg-amber-300 placeholder:text-black outline-none border-2 border-black rounded-xl"
          type="text"
          placeholder="Task"
          />
          {warn && 
            <p>Error</p>
          }
          <input
          value={inputDescription}
          onChange={inputDescriptionChange}
          className="p-2 mt-6 bg-amber-300 placeholder:text-black outline-none border-2 border-black rounded-xl"
          type="text"
          placeholder="Description"
          />
          <button className="border-2 border-black rounded-xl px-10 py-2.5 bg-amber-300 mt-24">
            Add
          </button>
        </form>
      </div>
      }
    </div>
  );
}