import { motion } from "framer-motion";
import React from "react";

const Hasil = ({ hasil }) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.5 }}
			className="col-span-12 lg:col-span-6"
		>
			<div>
				<h2 className="font-semibold">Kebutuhan Kalori Harianmu</h2>
				<div className="flex gap-x-10">
					<span>Menjaga Berat Badan</span>
					<span>{hasil}kkal/hari</span>
				</div>
				<div className="flex gap-x-10">
					<span>Menurunkan Berat Badan:</span>
					<span>{hasil - 500}kkal/hari</span>
				</div>
				<div className="flex gap-x-10">
					<span>Menaikkan Berat Badan:</span>
					<span>{hasil + 500}kkal/hari</span>
				</div>
			</div>
			<div className="mt-16">
				<h2 className="font-semibold">
					Pilih Paket Menu yang Sesuai Kebutuhanmu
				</h2>
				<div className="flex flex-wrap gap-y-6 justify-center lg:justify-start lg:gap-12 mt-12">
					<div className="w-full min-h-[300px] h-full bg-light-blue rounded-3xl"></div>
					<div className="w-full min-h-[300px] h-full bg-light-blue rounded-3xl"></div>
					<div className="w-full min-h-[300px] h-full bg-light-blue rounded-3xl"></div>
				</div>
			</div>
		</motion.div>
	);
};

export default Hasil;
