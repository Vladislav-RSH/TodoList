import Delete from "./delete";
import Check from "./check";

export default function Task({ task, onDelete, onCheck }) {
export default function Task({ task, onDelete, onCheck }) {
  return (
    <div className="flex justify-between mb-4">
      <div className="w-5/6">
        <h1 className="text-lg">{task}</h1>
    <div className="flex justify-between mb-4">
      <div className="w-5/6">
        <h1 className="text-lg">{task}</h1>
      </div>
      <div className="flex justify-end">
        <button onClick={onDelete} className="bg-red-400 w-8 h-8 rounded-[50%] border-2 border-black flex items-center justify-center">
          <Delete />
        </button>
        <button onClick={onCheck} className="bg-green-400 w-8 h-8 rounded-[50%] border-2 border-black flex items-center justify-center">
          <Check />
        </button>
      <div className="flex justify-end">
        <button onClick={onDelete} className="bg-red-400 w-8 h-8 rounded-[50%] border-2 border-black flex items-center justify-center">
          <Delete />
        </button>
        <button onClick={onCheck} className="bg-green-400 w-8 h-8 rounded-[50%] border-2 border-black flex items-center justify-center">
          <Check />
        </button>
      </div>
    </div>
  );
}