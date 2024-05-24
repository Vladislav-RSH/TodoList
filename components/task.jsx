import Delete from "./delete";
import Check from "./check";

export default function() {
	return (
		<div className="w-full mt-8 rounded-xl border-2 border-black bg-fuchsia-600 flex justify-between items-center p-2">
			<div>
				<p>Task</p>
			</div>
			<div className="p-0 m-0">
				<Check />
				<Delete />
			</div>
		</div>
	);
}