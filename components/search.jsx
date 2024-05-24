import SearchIcon from "../icons/search-icon.jsx";

export default function Search() {
	return (
		<div className="flex flex-row mr-6">
			<input className="placeholder:text-black outline-none border-2 border-black rounded-tl-xl rounded-bl-xl bg-amber-300 p-2" type="text" placeholder="Поиск..."/>
			<button className="rounded-tr-xl rounded-br-xl text-white bg-zinc-900">
				<div className=" w-10 h-10 flex justify-center items-center">
					<SearchIcon />
				</div>
			</button>
		</div>
	);
}