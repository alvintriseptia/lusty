import React from "react";
import SectionTitle from "../../SectionTitle";
import ReferenceCard from "./ReferenceCard";

const Reference = () => {
	const data = [
		{
			width: 24,
			height: 24,
			imageName: "figma",
			imageAlt: "Figma",
			link: "https://www.figma.com/",
			title: "Figma",
			description: "Alat untuk membuat wireframe dan design website",
		},
		{
			width: 32,
			height: 32,
			imageName: "nextjs",
			imageAlt: "Next JS",
			link: "https://nextjs.org/",
			title: "Next JS",
			description:
				"Framework React untuk manajemen html dan javascript agar lebih efisien",
		},
		{
			width: 32,
			height: 20,
			imageName: "tailwind",
			imageAlt: "Tailwind CSS",
			link: "https://tailwindcss.com/",
			title: "Tailwind CSS",
			description: "Framework CSS untuk membuat desain website",
		},
		{
			width: 32,
			height: 32,
			imageName: "framermotion",
			imageAlt: "Framer Motion",
			link: "https://framer.com/motion/",
			title: "Framer Motion",
			description:
				"Library Javascript untuk penggunaan transisi dan animasi pada komponen",
		},
		{
			width: 30,
			height: 30,
			imageName: "swiper",
			imageAlt: "Swiper JS",
			link: "https://swiperjs.com/",
			title: "Swiper JS",
			description: "Library Javascript untuk pembuatan carousel/slider",
		},
		{
			width: 30,
			height: 30,
			imageName: "unsplash",
			imageAlt: "Unsplash",
			link: "https://unsplash.com/",
			title: "Unsplash",
			description: "Referensi pengambilan ilustrasi/gambar pada tiap komponen",
		},
		{
			width: 40,
			height: 25,
			imageName: "pixabay",
			imageAlt: "Pixabay",
			link: "https://pixabay.com/",
			title: "Pixabay",
			description: "Referensi pengambilan ilustrasi/gambar pada tiap komponen",
		},
	];
	return (
		<section>
			<div className="container mx-auto px-4  max-w-screen-xl my-[160px]">
				<SectionTitle
					title="Referensi Pembuatan Website Lusty"
					imageName="reference"
					imageAlt="referensi"
				/>
				<div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start">
					{data.map((item, index) => (
						<ReferenceCard key={index} {...item} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Reference;
