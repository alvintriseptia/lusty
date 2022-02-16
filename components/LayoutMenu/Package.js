import Image from "next/image";
import React from "react";

const Package = ({ imageName, imageAlt, title, waktu, harga }) => {
	return (
		<div className="bg-light-blue w-full rounded-xl">
			<div className="w-full h-[250px] relative">
				<Image layout="fill" src={`/assets/${imageName}.jpg`} alt={imageAlt} />
			</div>
			<div className="p-4 pb-8">
				<div className="mb-6">
					<div className="flex justify-between items-center">
						<h4 className="text-lg font-semibold">{title}</h4>
						<p className="capitalize text-sm">{waktu}</p>
					</div>
					<p className="text-sm">Rp{harga}</p>
				</div>
				<a className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
					Pilih Paket
				</a>
			</div>
		</div>
	);
};

export default Package;
