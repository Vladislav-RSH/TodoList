import AddButton from "./add-btn";
import Search from "./search";
import Task from "./task";

export default function DashBoard() {
	return (
		<section className="w-1/2 h-[97%] bg-teal-400 rounded-2xl flex flex-col items-center border-2 border-black px-12">
			<h1 className="text-6xl mt-8">ToDo List</h1>
			<div className="flex flex-row w-full mt-8">
				<Search />
				<AddButton />
			</div>
			<div className="mt-8 w-full border-[1px] border-black"></div>
			<Task />
			<Task />
			<Task />
		</section>
	);
}