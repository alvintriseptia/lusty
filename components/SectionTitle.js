import React from "react";
import Image from "next/image";

const SectionTitle = ({ imageName, imageAlt, title }) => {
	return (
		<div className="flex gap-x-4 lg:gap-x-10 justify-center lg:justify-start items-center">
			<div className="w-[70px] h-[70px] lg:w-[100px] lg:h-[100px] rounded-3xl rotate-45 bg-gradient-to-br from-dark-blue to-purple flex items-center justify-center">
				<div className="w-full h-full -rotate-45 flex items-center justify-center">
					<Image
						width={40}
						height={40}
						src={`/assets/${imageName}.png`}
						alt={imageAlt}
					/>
				</div>
			</div>
			<h2 className="text-2xl lg:text-5xl font-semibold text-darkest-blue">
				{title}
			</h2>
		</div>
	);
};

export default SectionTitle;
