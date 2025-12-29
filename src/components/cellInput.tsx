export default function CellInput() {
	return (
		<div className="flex flex-col gap-1 w-full max-w-md">
			<span className="text-sm text-gray-700">Celular</span>

			<div className="flex items-center border rounded-md h-12 overflow-hidden w-122.5">
				<div className="flex items-center gap-1 px-3 border-r">
					<img
						src="https://flagcdn.com/w20/br.png"
						alt="Brasil"
						className="w-5 h-4"
					/>
					<span className="text-sm text-gray-700">+55</span>
				</div>

				<input
					type="tel"
					placeholder="(11) 98765-4321"
					className="flex-1 h-full px-3 outline-none focus:ring-0"
				/>
			</div>
		</div>
	);
}
