import DelIcon from "../icons/delete-icon";

export default function Delete() {
	return (
		<button className="border-black border-2 rounded-xl bg-red-400">
			<div className="p-1">
				<DelIcon />
			</div>
		</button>
	);
}