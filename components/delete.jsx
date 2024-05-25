import DelIcon from "../icons/delete-icon";
import React from 'react';

export default function Delete({task, index, delTask}) {

  return (
    <button className="border-black border-2 rounded-xl bg-red-400">
      <div className="p-1">
        <DelIcon />
      </div>
    </button>
  );
}