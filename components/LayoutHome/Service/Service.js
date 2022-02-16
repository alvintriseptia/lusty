import React from "react";
import SectionTitle from "../../SectionTitle";
import CardService from "./CardService";

const Service = () => {
	const data = [
		{
			imageName: "eat",
			imageAlt: "food",
			href: "/services#kateringsehat",
			title: "Katering Sehat",
			description:
				"Dapatkan makanan yang sehat dan bergizi untuk kebutuhan Kamu",
		},
		{
			imageName: "menu",
			imageAlt: "menu",
			href: "/services#aturmenu",
			title: "Atur Menu",
			description: "Pilih dan atur menu makanan harian Kamu dengan mudah",
		},
		{
			imageName: "chat-gold",
			imageAlt: "konsultasi",
			href: "/services#konsultasi",
			title: "Konsultasi",
			description:
				"Konsultasi dengan Lusty untuk mengetahui kebutuhan makanan harianmu",
		},
	];

	return (
		<div className="my-[120px]">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<SectionTitle
					title="Layanan Lusty"
					imageName="service"
					imageAlt="layanan"
				/>
				<div className="mt-12 flex flex-col lg:flex-row bg-gradient-to-b from-dark-blue to-purple rounded-[100px]">
					{data.map((item, index) => (
						<CardService key={index} {...item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Service;
