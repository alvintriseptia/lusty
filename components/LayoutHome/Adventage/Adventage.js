import Image from "next/image";
import React from "react";
import SectionTitle from "../../SectionTitle";
import CardAdventage from "./CardAdventage";

const Adventage = () => {
	const data = [
		{
			imageName: "delivery",
			imageAlt: "gratis ongkir",
			title: "Gratis ongkir",
			description:
				"Nikmati layanan gratis ongkir selama Kamu menggunakan Lusty",
		},
		{
			imageName: "menu-white",
			imageAlt: "atur menu",
			title: "Penyesuaian menu",
			description:
				"Semua kebutuhan makanan Kamu akan disesuaikan dengan kebutuhan Kamu",
		},
		{
			imageName: "count",
			imageAlt: "Hitung kalori",
			title: "Hitung kalori",
			description: "Ketahui jumlah kalori yang Kamu butuhkan",
		},
		{
			imageName: "halal",
			imageAlt: "halal",
			title: "100% Halal",
			description: "Semua produk yang disediakan Lusty sudah terjamin halal",
		},
	];
	return (
		<section className="container mx-auto px-4  max-w-screen-xl mt-10 ">
			<div className="grid grid-cols-12 lg:gap-10">
				<div className="col-span-12 lg:col-span-4 2xl:col-span-5">
					<div className="relative w-full min-h-[300px] h-full border-[20px] border-light  bg-gradient-to-br from-light-blue to-dark-blue rounded-card overflow-hidden">
						<Image
							layout="fill"
							className="object-cover"
							src="/assets/food1.png"
							alt="vegetables"
						/>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-8 2xl:col-span-7 lg:my-auto mt-12 lg:mt-0 py-10">
					<div>
						<SectionTitle
							imageName="good"
							imageAlt="top"
							title="Keunggulan Lusty"
						/>
						<p className="mt-8 mb-24 text-center lg:text-left">
							Lusty memiliki beberapa keunggulan yang menjadikan alasan kenapa
							kamu perlu mempertimbangkan untuk menggunakan layanan Lusty
						</p>
					</div>
					<div className="flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-16">
						{data.map((item, index) => (
							<CardAdventage key={index} {...item} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Adventage;
