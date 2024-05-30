import { useState } from "react";

export default function TaskNoIcon({ task, description, index, onDelete }) {
  const [showBtn, setShowBtn] = useState(false);

  const btnShow = () => {
    setShowBtn(!showBtn);
  }

  return (
    <button onClick={btnShow} className="w-full mt-8 rounded-xl border-2 border-black bg-fuchsia-600 flex justify-center 
		items-center p-2 flex flex-col">
      <p>{task}</p>
      {showBtn && 
        <div className="m-4">
          {description}
        </div>
      }
    </button>
  );
}