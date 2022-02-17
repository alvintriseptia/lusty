import Image from "next/image";
import React from "react";

const Package = ({ imageName, imageAlt, title, waktu, harga, kalori }) => {
	return (
		<div className="bg-light-blue w-full rounded-xl">
			<div className="w-full h-[250px] relative rounded-t-xl">
				<Image
					className="object-cover"
					layout="fill"
					src={`/assets/${imageName}.jpg`}
					alt={imageAlt}
				/>
			</div>
			<div className="p-4 pb-4">
				<div className="mb-6">
					<div className="flex justify-between items-center">
						<h4 className="text-lg font-semibold">{title}</h4>
						<p className="capitalize text-lg">{waktu}</p>
					</div>
					<p className="text-sm">Rp{harga}</p>
				</div>
				<div className="flex justify-between items-center">
					<p className="text-sm font-semibold">{kalori}kkal/hari</p>
					<a className="px-4 py-2 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
						Pilih Paket
					</a>
				</div>
			</div>
		</div>
	);
};

export default Package;
