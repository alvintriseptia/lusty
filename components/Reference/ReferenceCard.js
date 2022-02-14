import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ReferenceCard = ({
	link,
	width,
	height,
	imageName,
	imageAlt,
	title,
	description,
}) => {
	return (
		<Link href={`${link}`} passHref>
			<motion.a
				target="_blank"
				whileHover={{
					scale: 1.1,
					transition: {
						duration: 0.5,
					},
				}}
				whileTap={{
					scale: 0.9,
					transition: {
						duration: 0.5,
					},
				}}
				className="px-4 py-2 bg-light min-h-[100px] w-[400px] shadow-lg rounded-xl cursor-pointer"
			>
				<div className="flex gap-x-2 items-center">
					<Image
						width={`${width}`}
						height={`${height}`}
						src={`/assets/${imageName}.png`}
						alt={`${imageAlt}`}
					/>
					<strong>{title}</strong>
				</div>
				<p className="mt-4">{description}</p>
			</motion.a>
		</Link>
	);
};

export default ReferenceCard;
