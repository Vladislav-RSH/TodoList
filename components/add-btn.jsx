import React, { useState } from 'react';

export default function AddButton({onAddTask}) {

	const [showForm, setShowForm] = useState(false);
	const [count, setCount] = useState(0);
	const [inputTask, setInputTask] = useState('');
	const [inputDescription, setInputDescription] = useState('');

	const inputTaskChange = (event) => {
		setInputTask(event.target.value);
	}

	const inputDescriptionChange = (event) => {
		setInputDescription(event.target.value);
	}

	const btnShowForm = () => {

		setCount(count + 1);

		if (count === 1) {
			setShowForm(false);
			setInputTask('');
			setInputDescription('');
			setCount(count - 1);
		}

		else {
			setShowForm(true);
		}
	}

	const addTask = () => {
		onAddTask({task: inputTask, description: inputDescription});
		setInputTask('');
		setInputDescription('');
		setShowForm(false);
		setCount(count - 1);
	}

  return (
    <div className="w-full bg-green-600 border-2 rounded-xl border-black flex justify-center items-center">
      <button onClick={btnShowForm}>New Task</button>
	  {showForm && 
	  <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16">
		<form className="flex justify-center items-center flex-col bg-green-600 p-6 rounded-xl border-2 border-black">
			<input
			value={inputTask}
			onChange={inputTaskChange}
			className="p-2 mt-6 bg-amber-300 placeholder:text-black outline-none border-2 border-black rounded-xl"
			type="text"
			placeholder="Задача"
			/>
			<input
			value={inputDescription}
			onChange={inputDescriptionChange}
			className="p-2 mt-6 bg-amber-300 placeholder:text-black outline-none border-2 border-black rounded-xl"
			type="text"
			placeholder="Описание"
			/>
			<button onClick={addTask} className="border-2 border-black rounded-xl px-10 py-2.5 bg-amber-300 mt-24">
				Добавить
			</button>
		</form>
	  </div>
	  }
    </div>
  );
}