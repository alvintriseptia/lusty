const OrderDetail = ({ menuChoosed, dayList, waktuList, setMenuChoosed }) => {
	const handleDelete = (id) => {
		setMenuChoosed(menuChoosed.filter((e) => e.id !== id));
	};

	const totalPrice = menuChoosed
		.map((e) => e.harga.replace(/\./g, ""))
		.reduce((a, b) => parseInt(a) + parseInt(b), 0);

	const totalCalorie = dayList.map((day) =>
		menuChoosed
			.filter((e) => e.hari === day)
			.map((e) => e.kalori)
			.reduce((a, b) => parseInt(a) + parseInt(b), 0)
	);

	return (
		<div className="w-full bg-light rounded-xl py-4">
			<h4 className="text-xl text-center font-semibold">Daftar Pesanan</h4>
			<div className="h-[600px] overflow-y-auto p-4">
				{dayList.map((day, index) => (
					<div key={index}>
						<div className="flex justify-between items-center">
							<h5 className="text-lg font-semibold mt-3 capitalize">{day}</h5>
							<p>{totalCalorie[index]}kkal</p>
						</div>
						{waktuList.map((waktu, index) => (
							<div key={index}>
								<h6 className="text-black-red">
									{index > 0 ? waktu.slice(0, 5) + " " + waktu.slice(5) : waktu}
									:
								</h6>
								{menuChoosed
									.filter((e) => e.hari === day && e.waktu === waktu)
									.map((item) => (
										<div
											key={item.id}
											className="flex justify-between text-sm items-center ml-2"
										>
											<div>
												<p>{item.title}</p>
												<span className="text-sm">({item.kalori} kkal)</span>
											</div>
											<div className="flex gap-x-4 items-center">
												<p>Rp{item.harga}</p>
												<button
													onClick={() => handleDelete(item.id)}
													className="font-bold text-lg"
												>
													-
												</button>
											</div>
										</div>
									))}
							</div>
						))}
					</div>
				))}
			</div>
			<div className="border-t-2 border-t-dark mt-2 flex justify-between items-center p-4 pb-0">
				<button
					onClick={() => handleClickMenu(menu)}
					className="px-4 py-2 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue"
				>
					Pesan
				</button>
				<div className="flex gap-x-4 items-center">
					<span>Total:</span>
					<span>
						Rp{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
					</span>
				</div>
			</div>
		</div>
	);
};

export default OrderDetail;
