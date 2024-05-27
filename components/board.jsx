import CompletedTask from "./completed-task.jsx";
import DashBoard from "./dash-board.jsx";
import FullTask from "./full-task.jsx";

export default function Board() {
  return (
    <section className="h-[87%] w-[70%] bg-red-400 shadow-custom rounded-3xl border-4 border-black flex justify-between">
		<CompletedTask />
		<DashBoard />
		<FullTask />
    </section>
  );
}