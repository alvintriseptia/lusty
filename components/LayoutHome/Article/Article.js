import { motion } from "framer-motion";
import Image from "next/image";
import React, { useRef, useState } from "react";
import SectionTitle from "../../SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Navigation } from "swiper";
import Link from "next/link";
SwiperCore.use([Navigation]);

const Article = ({ data }) => {
	const [leftClick, setLeftClick] = useState(false);
	const [rightClick, setRightClick] = useState(true);
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<div className="container mx-auto px-4  max-w-screen-xl my-[160px]">
			<SectionTitle title="Artikel" imageName="article" imageAlt="artikel" />
			<Swiper
				className="mt-12 w-full"
				slidesPerView={1}
				spaceBetween={10}
				breakpoints={{
					578: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 50,
					},
				}}
				navigation={{
					prevEl: navigationPrevRef.current,
					nextEl: navigationNextRef.current,
				}}
				onInit={(swiper) => {
					swiper.params.navigation.prevEl = navigationPrevRef.current;
					swiper.params.navigation.nextEl = navigationNextRef.current;
					swiper.navigation.init();
					swiper.navigation.update();
				}}
				onSlideChange={(swiper) => {
					let realIndex = swiper.realIndex;
					if (realIndex === 0) {
						setLeftClick(false);
					} else if (screen.width < 578 && realIndex === 5) {
						setRightClick(false);
					} else if (screen.width >= 578 && realIndex === 4) {
						setRightClick(false);
					} else if (screen.width >= 1024 && realIndex === 3) {
						setRightClick(false);
					} else {
						setLeftClick(true);
						setRightClick(true);
					}
				}}
			>
				{data.map((item, index) => (
					<SwiperSlide
						key={index}
						className="rounded-3xl bg-light-blue cursor-grab"
					>
						<div className="w-full h-[200px] relative">
							<Image
								layout="fill"
								className="w-full object-cover rounded-t-3xl"
								src={`/assets/${item.imageName}`}
								alt={item.imageAlt}
							/>
						</div>
						<div className="pt-2 pb-4 px-5 min-h-[200px] flex flex-col justify-between">
							<div>
								<span>{item.date}</span>
								<h5 className="text-2xl font-semibold mt-5">{item.title}</h5>
							</div>
							<Link href={`/article/${item.id}`}>
								<a className="underline">Baca Artikel</a>
							</Link>
						</div>
					</SwiperSlide>
				))}

				<div className="flex justify-end gap-x-6 p-8">
					<motion.button
						whileHover={leftClick && { scale: 1.1 }}
						whileTap={leftClick && { scale: 0.9 }}
						ref={navigationPrevRef}
						className={`w-12 h-12 rounded-full border-2 flex justify-center items-center border-dark-red  
						${!leftClick ? "opacity-30" : "opacity-100"}`}
					>
						<Image width={20} height={20} src="/assets/left.png" alt="left" />
					</motion.button>
					<motion.button
						whileHover={rightClick && { scale: 1.1 }}
						whileTap={rightClick && { scale: 0.9 }}
						ref={navigationNextRef}
						className={`w-12 h-12 rounded-full border-2 flex justify-center items-center border-dark-red 
						${!rightClick ? "opacity-30" : "opacity-100"}
						`}
					>
						<Image width={20} height={20} src="/assets/right.png" alt="right" />
					</motion.button>
				</div>
			</Swiper>
		</div>
	);
};

export default Article;
