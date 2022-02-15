import React, { useEffect, useRef, useState } from "react";
import Kalori from "./Kalori";
import Hero from "./Hero";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "../SectionTitle";
import CardMenu from "./CardMenu";
SwiperCore.use([Navigation]);
import { menuList } from "../menuList";

const LayoutMenu = () => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const [clicked, setClicked] = useState(false);
	const [day, setDay] = useState("senin");
	const [jenis, setJenis] = useState("sarapan");
	const dayList = [
		"senin",
		"selasa",
		"rabu",
		"kamis",
		"jumat",
		"sabtu",
		"minggu",
	];
	const jenisList = ["sarapan", "makanSiang", "makanMalam"];

	const handleClickDay = (el) => {
		console.log(el);
		setClicked(false);
		setDay(el);
		setTimeout(() => {
			setClicked(true);
		}, 100);
	};

	const handleClickJenis = (el) => {
		console.log(el);
		setClicked(false);
		setJenis(el);
		setTimeout(() => {
			setClicked(true);
		}, 100);
	};

	useEffect(() => {}), [day, jenis, clicked];

	return (
		<>
			<Hero />
			<Kalori />
			<div className="container mx-auto px-4 lg:px-[120px] my-[160px]">
				<SectionTitle title="Pilih Paket" imageName="eat" imageAlt="makanan" />
				<div className="mt-12">
					<Swiper
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
					>
						<SwiperSlide className="pt-6 px-9 bg-light-blue">
							<div className="h-[500px]"></div>
						</SwiperSlide>
						<div className="flex gap-x-6 justify-end px-9 py-2">
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								ref={navigationPrevRef}
								className={`w-12 h-12 rounded-full border-2 flex justify-center items-center border-dark-red hover:scale-105`}
							>
								<Image
									width={20}
									height={20}
									src="/assets/left.png"
									alt="left"
								/>
							</motion.button>
							<motion.button
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								ref={navigationNextRef}
								className={`w-12 h-12 rounded-full border-2 flex justify-center items-center border-dark-red hover:scale-105`}
							>
								<Image
									width={20}
									height={20}
									src="/assets/right.png"
									alt="right"
								/>
							</motion.button>
						</div>
					</Swiper>
				</div>
				<div className="my-[160px]">
					<SectionTitle title="Atur Menu" imageName="menu" imageAlt="menu" />
					<div className="flex justify-center mt-12">
						<ul className="flex bg-light-blue rounded-lg">
							{jenisList.map((item, index) => (
								<motion.li
									key={index}
									onClick={() => handleClickJenis(item)}
									whileHover={{
										scale: 1.1,
										backgroundColor: "#5da2d5",
										color: "#fff",
									}}
									whileTap={{ scale: 0.9 }}
									className={`rounded-lg px-4 py-2 cursor-pointer capitalize ${
										jenis === item ? "bg-dark-blue" : ""
									}`}
								>
									{index > 0 ? item.slice(0, 5) + " " + item.slice(5) : item}
								</motion.li>
							))}
						</ul>
					</div>
					<div className="grid grid-cols-12 lg:gap-x-10 mt-12">
						<div className="col-span-12 lg:col-span-2 my-auto">
							<div className="w-full bg-light-red rounded-lg">
								<ul>
									{dayList.map((item, index) => (
										<motion.li
											key={index}
											onClick={() => handleClickDay(item)}
											whileHover={{
												scale: 1.1,
												backgroundColor: "#F94268",
												color: "#fff",
											}}
											whileTap={{ scale: 0.9 }}
											className={`rounded-lg px-4 py-2 cursor-pointer capitalize ${
												day === item ? "bg-dark-red" : ""
											}`}
										>
											{item}
										</motion.li>
									))}
								</ul>
							</div>
						</div>

						<div className="col-span-12 lg:col-span-10 overflow-y-auto h-[700px] py-10">
							{clicked && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
									className="flex flex-wrap gap-y-10 lg:gap-10"
								>
									{menuList[0][day][jenis].map((item, index) => (
										<CardMenu key={index} menu={item} />
									))}
								</motion.div>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LayoutMenu;
