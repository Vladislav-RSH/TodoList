import DelIcon from "../icons/delete-icon";
import React from 'react';

export default function Delete({ index, onDelete }) {
  return (
    <button onClick={() => onDelete(index)} className="border-black border-2 rounded-xl bg-red-400">
      <div className="p-1">
        <DelIcon />
      </div>
    </button>
  );
}