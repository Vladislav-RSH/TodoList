import Check from "./check";
import { useState } from "react";

export default function CompletedTask() {

	const [showForm, setShowForm] = useState(false);

	return (
		<div className="mt-8 ml-8">
			<div className="rounded-[50%] bg-amber-300 w-4 h-4 absolute ml-4 mt-[-5px] text-xs flex justify-center">0</div>
			<Check  onClick={() => setShowForm(true)}/>
		</div>
	);
}