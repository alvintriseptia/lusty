import React from "react";
import Image from "next/image";

const CardAdventage = ({ imageName, imageAlt, title, description }) => {
	return (
		<div className="bg-light-blue w-[300px] h-[200px] rounded-2xl py-4 px-5">
			<div className="w-24 h-24 rounded-full bg-dark-blue flex items-center justify-center -translate-y-2/3">
				<Image
					width={48}
					height={48}
					src={`/assets/${imageName}.png`}
					alt={imageAlt}
				/>
			</div>
			<div className="-translate-y-1/2 text-darkest-blue">
				<h3 className="text-2xl font-semibold">{title}</h3>
				<p className="mt-3">{description}</p>
			</div>
		</div>
	);
};

export default CardAdventage;
