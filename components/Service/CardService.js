import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const CardService = ({ imageName, imageAlt, title, description }) => {
	return (
		<motion.div
			whileHover={{
				boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
				textDecoration: "underline",
				scale: 1.1,
				transition: {
					duration: 0.2,
				},
			}}
			className="px-5 py-12 xl:p-12 flex flex-col items-center justify-center gap-y-2 text-light text-center hover:bg-gradient-to-br hover:from-light-red hover:to-dark-red transition-all"
		>
			<Image
				width={100}
				height={100}
				src={`/assets/${imageName}.png`}
				alt={imageAlt}
			/>
			<a href="#layanan" className="text-3xl font-semibold">
				{title}
			</a>
			<a href="#layanan" className="text-lg">
				{description}
			</a>
		</motion.div>
	);
};

export default CardService;
