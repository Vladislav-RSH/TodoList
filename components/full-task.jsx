import Menu from "../icons/menu";
import { useState } from "react";
import Task from "./task";

export default function FullTask() {

	const [showForm, setShowForm] = useState(false)
	const [count, setCount] = useState(0);

	const btnShowForm = () => {

		setCount(count + 1);

		if (count === 1) {
			setShowForm(false);
			setCount(count - 1);
		}

		else {
			setShowForm(true);
		}
	}

	return (
		<div className="mt-6 mr-6 bg-green-400 w-8 h-8 rounded-[50%] border-black border-2 flex items-center justify-center">
			<div className="rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-6 mt-[-25px] text-xs flex justify-center">0</div>
			<button onClick={btnShowForm}>
				<Menu />
			</button>
			{showForm && 
				<div 
					className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] mt-16 w-1/2 h-1/2 border-2 
					border-black bg-green-400 rounded-xl flex flex-col items-center overflow-auto">
					<h1 className="text-2xl mt-6">Full Tasks</h1>
					<div className="w-5/6 mb-6">
					</div>
				</div>
			}
		</div>
	);
}