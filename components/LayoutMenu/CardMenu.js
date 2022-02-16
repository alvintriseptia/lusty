import Image from "next/image";
import Link from "next/link";
import { menuList } from "../menuList";

const CardMenu = ({
	menu,
	setMenuChoosed,
	menuChoosed,
	setLookMenu,
	disabledMenu,
}) => {
	const handleClickMenu = (el) => {
		setMenuChoosed([...menuChoosed, el]);
	};

	const handleClickLook = (id) => {
		const lookMenu = menuList.find((e) => e.id === id);
		setLookMenu(lookMenu);
	};

	return (
		<div
			className={`py-4 px-5 w-[320px] ${
				menuChoosed.includes(menu) ? "bg-dark-blue/50" : "bg-light-blue"
			} rounded-card`}
		>
			<div className="w-full h-[300px] bg-gradient-to-b rounded-card from-dark-blue to-purple flex justify-center items-center">
				<Image
					width={200}
					height={200}
					src={`/assets/${menu.imageName}.png`}
					alt={menu.imageAlt}
				/>
			</div>
			<div className="flex justify-between mt-4 mb-3.5 ">
				<div>
					<h4 className="font-semibold">{menu.title}</h4>
					<p className="text-sm">Rp{menu.harga}</p>
				</div>
				<span>{menu.kalori} kkal</span>
			</div>
			<span>Nutrisi:</span>
			<ul className="px-4 text-sm mb-4">
				<li className="flex justify-between">
					<span>Lemak:</span> <span>{menu.nutrisi.lemak}</span>
				</li>
				<li className="flex justify-between">
					<span>Protein:</span> <span>{menu.nutrisi.protein}</span>
				</li>
				<li className="flex justify-between">
					<span>Karbohidrat:</span> <span>{menu.nutrisi.karbohidrat}</span>
				</li>
			</ul>
			<div className="flex justify-center flex-wrap gap-x-4">
				<button
					onClick={() => handleClickMenu(menu)}
					className={`px-4 py-2 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue ${
						disabledMenu ? "opacity-30 pointer-events-none" : ""
					}`}
				>
					Pilih Menu
				</button>
				<Link href="/menu#detail">
					<a
						onClick={() => handleClickLook(menu.id)}
						className="px-4 py-2 rounded-2xl font-semibold border-2 border-dark-red hover:bg-dark-red/40"
					>
						Lihat Menu
					</a>
				</Link>
			</div>
		</div>
	);
};

export default CardMenu;
