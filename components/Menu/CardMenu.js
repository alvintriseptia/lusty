import React from "react";
import Image from "next/image";

const CardMenu = ({
	imageName,
	imageAlt,
	title,
	kalori,
	lemak,
	protein,
	karbohidrat,
}) => {
	return (
		<div className="py-4 px-5 bg-light-blue rounded-card">
			<div className="w-[273px] h-[300px] bg-gradient-to-b rounded-card from-dark-blue to-purple flex justify-center items-center">
				<Image
					width={200}
					height={200}
					src={`/assets/${imageName}.png`}
					alt={imageAlt}
				/>
			</div>
			<div className="flex justify-between mt-4 mb-3.5 text-lg">
				<h4 className="font-semibold">{title}</h4>
				<span>{kalori} kkal</span>
			</div>
			<span>Nutrisi:</span>
			<ul className="px-4 text-sm mb-4">
				<li className="flex justify-between">
					<span>Lemak:</span> <span>{lemak}</span>
				</li>
				<li className="flex justify-between">
					<span>Protein:</span> <span>{protein}</span>
				</li>
				<li className="flex justify-between">
					<span>Karbohidrat:</span> <span>{karbohidrat}</span>
				</li>
			</ul>
			<div className="flex justify-center">
				<a
					href="#menu"
					className="px-4 py-2 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue"
				>
					Lihat Menu
				</a>
			</div>
		</div>
	);
};

export default CardMenu;
