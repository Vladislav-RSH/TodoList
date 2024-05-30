import DelIcon from "../icons/delete-icon";

export default function Delete({ onClick }) {
  return (
    <button className="border-black border-2 rounded-xl bg-red-400" onClick={onClick}>
      <div className="p-1">
        <DelIcon />
      </div>
    </button>
  );
}