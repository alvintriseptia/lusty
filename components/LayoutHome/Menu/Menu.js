import React from "react";
import SectionTitle from "../../SectionTitle";
import CardMenu from "./CardMenu";

const Menu = () => {
	const data = [
		{
			imageName: "menu1",
			imageAlt: "menu1",
			title: "Contoh Menu 1",
			kalori: "350",
			lemak: "25,4g",
			protein: "18,5g",
			karbohidrat: "0,5g",
		},
		{
			imageName: "menu2",
			imageAlt: "menu2",
			title: "Contoh Menu 2",
			kalori: "250",
			lemak: "10,4g",
			protein: "55,4g",
			karbohidrat: "44,27g",
		},
		{
			imageName: "menu3",
			imageAlt: "menu3",
			title: "Contoh Menu 3",
			kalori: "300",
			lemak: "14g",
			protein: "60,4g",
			karbohidrat: "10,4g",
		},
	];
	return (
		<div className="container mx-auto px-4  max-w-screen-xl mt-10">
			<div className="grid grid-cols-12">
				<div className="col-span-12 lg:col-span-6">
					<SectionTitle imageName="menu" imageAlt="menu" title="Menu Lusty" />
					<p className="mt-8 mb-24 text-center lg:text-left">
						Contoh menu Lusty yang bisa kamu nikmati tiap harinya, lihat lebih
						banyak untuk mengetahui menu sehat lainnya
					</p>
				</div>
			</div>
			<div className="flex justify-center gap-10 flex-wrap">
				{data.map((item, index) => (
					<CardMenu key={index} {...item} />
				))}
			</div>
		</div>
	);
};

export default Menu;
