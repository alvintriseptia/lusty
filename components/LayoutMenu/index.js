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
import { packageList } from "../packageList";
import OrderDetail from "./OrderDetail";
import MenuDetail from "./MenuDetail";

const LayoutMenu = () => {
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);
	const [clicked, setClicked] = useState(true);
	const [day, setDay] = useState("senin");
	const [waktu, setWaktu] = useState("sarapan");
	const dayList = [
		"senin",
		"selasa",
		"rabu",
		"kamis",
		"jumat",
		"sabtu",
		"minggu",
	];
	const waktuList = ["sarapan", "makansiang", "makanmalam"];
	const [menuChoosed, setMenuChoosed] = useState([]);
	const [showMenu, setShowMenu] = useState([
		...menuList.filter((e) => e.hari === "senin" && e.waktu === "sarapan"),
	]);
	const [lookMenu, setLookMenu] = useState([]);

	const handleClickDay = (e) => {
		setClicked(false);
		setDay(e);
		setTimeout(() => {
			setClicked(true);
		}, 0.001);
	};

	const handleClickJenis = (e) => {
		setClicked(false);
		setWaktu(e);
		setTimeout(() => {
			setClicked(true);
		}, 0.001);
	};

	useEffect(() => {
		setShowMenu(menuList.filter((e) => e.hari === day && e.waktu === waktu));
	}, [lookMenu, day, waktu, clicked, menuChoosed]);

	return (
		<>
			<Hero />
			<Kalori />
			<div className="container mx-auto px-4 lg:px-0 max-w-screen-xl my-[160px]">
				<SectionTitle title="Pilih Paket" imageName="eat" imageAlt="makanan" />
				<div className="mt-12">
					<Swiper
						slidesPerView={1}
						breakpoints={{
							578: {
								slidesPerView: 3,
							},
							1024: {
								slidesPerView: 4,
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
						{packageList.map((item) => (
							<SwiperSlide key={item.id} className="pt-6 px-4">
								<div className="bg-light-blue w-full rounded-xl">
									<div className="w-full h-[250px] relative">
										<Image
											layout="fill"
											src={`/assets/${item.imageName}.jpg`}
											alt={item.imageAlt}
										/>
									</div>
									<div className="p-4 pb-8">
										<div className="mb-6">
											<div className="flex justify-between items-center">
												<h4 className="text-lg font-semibold">{item.title}</h4>
												<p className="capitalize text-sm">{item.waktu}</p>
											</div>
											<p className="text-sm">Rp{item.harga}</p>
										</div>
										<a className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
											Pilih Paket
										</a>
									</div>
								</div>
							</SwiperSlide>
						))}
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

				<div className="mt-[160px] mb-[120px]">
					<SectionTitle title="Atur Menu" imageName="menu" imageAlt="menu" />
					<div className="flex justify-center mt-12">
						{clicked && (
							<ul className="flex bg-light-blue rounded-lg">
								{waktuList.map((item, index) => (
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
											waktu === item ? "bg-dark-blue" : ""
										}`}
									>
										{index > 0 ? item.slice(0, 5) + " " + item.slice(5) : item}
									</motion.li>
								))}
							</ul>
						)}
					</div>
					<div className="grid grid-cols-12 lg:gap-x-10 mt-12">
						<div className="col-span-12 lg:col-span-2 my-auto">
							<div className="w-full bg-light-red rounded-lg">
								{clicked && (
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
								)}
							</div>
						</div>

						<div className="col-span-12 lg:col-span-10 overflow-y-auto h-[700px] py-10">
							{clicked && (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
									className="flex flex-wrap justify-center gap-y-10 lg:gap-10"
								>
									{showMenu.find((e) => menuChoosed.includes(e))
										? showMenu.map((item, index) => (
												<CardMenu
													key={index}
													menu={item}
													setMenuChoosed={setMenuChoosed}
													setLookMenu={setLookMenu}
													menuChoosed={menuChoosed}
													disabledMenu={true}
												/>
										  ))
										: showMenu.map((item, index) => (
												<CardMenu
													key={index}
													menu={item}
													setMenuChoosed={setMenuChoosed}
													setLookMenu={setLookMenu}
													menuChoosed={menuChoosed}
													disabledMenu={false}
												/>
										  ))}
								</motion.div>
							)}
						</div>
					</div>
				</div>

				<div className="grid grid-cols-12 lg:gap-x-10">
					<div className="col-span-12 order-2 lg:order-1 lg:col-span-4 pt-40">
						<OrderDetail
							menuChoosed={menuChoosed}
							dayList={dayList}
							waktuList={waktuList}
							setMenuChoosed={setMenuChoosed}
						/>
					</div>
					<div className="col-span-12 order-1 lg:order-2 lg:col-span-8">
						{lookMenu.length !== 0 && <MenuDetail lookMenu={lookMenu} />}
					</div>
				</div>
			</div>
		</>
	);
};

export default LayoutMenu;
