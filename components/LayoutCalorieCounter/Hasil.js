import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Package from "../Package/Package";
import { packageList } from "../packageList";

const Hasil = ({ hasil }) => {
	const maintainCalorie = packageList.filter(
		(e) => Math.abs(parseInt(e.kalori) - parseInt(hasil)) < 300
	);
	const deficitCalorie = packageList.filter(
		(e) => Math.abs(parseInt(e.kalori) - (parseInt(hasil) - 500)) < 300
	);
	const surplusCalorie = packageList.filter(
		(e) => Math.abs(parseInt(e.kalori) - (parseInt(hasil) + 500)) < 300
	);

	const jenisList = ["maintain", "defisit", "surplus"];
	const [clicked, setClicked] = useState(true);
	const [jenis, setJenis] = useState("maintain");
	const [showMenu, setShowMenu] = useState(maintainCalorie);

	const handleClickJenis = (e) => {
		setClicked(false);
		setJenis(e);
		if (e === "maintain") {
			setShowMenu(maintainCalorie);
		} else if (e === "defisit") {
			setShowMenu(deficitCalorie);
		} else if (e === "surplus") {
			setShowMenu(surplusCalorie);
		}
		setTimeout(() => {
			setClicked(true);
		}, 0.001);
	};

	useEffect(() => {}, [jenis]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div>
				<h2 className="font-semibold">Kebutuhan Kalori Harianmu</h2>
				<div className="flex gap-x-10">
					<span>Menjaga Berat Badan(maintain):</span>
					<span>{hasil}kkal/hari</span>
				</div>
				<div className="flex gap-x-10">
					<span>Menurunkan Berat Badan(defisit):</span>
					<span>{hasil - 500}kkal/hari</span>
				</div>
				<div className="flex gap-x-10">
					<span>Menaikkan Berat Badan(surplus):</span>
					<span>{hasil + 500}kkal/hari</span>
				</div>
			</div>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.5 }}
				className="mt-16 flex flex-col items-center gap-y-8"
			>
				<h2 className="font-semibold">
					Pilih Paket Menu yang Sesuai Kebutuhanmu
				</h2>
				{clicked && (
					<ul className="flex justify-center bg-light-blue rounded-lg text-center">
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
								{item}
							</motion.li>
						))}
					</ul>
				)}
				<div className="flex flex-wrap items-center justify-center gap-y-8 w-[300px]">
					{showMenu.map((item) => (
						<Package key={item.id} {...item} />
					))}
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Hasil;
