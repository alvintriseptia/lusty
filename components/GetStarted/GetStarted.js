import Image from "next/image";
import Link from "next/link";
import React from "react";

const GetStarted = () => {
	return (
		<div className="container mx-auto px-4  max-w-screen-xl flex items-center my-[120px]">
			<div className="h-full w-full bg-gradient-to-br from-yellow to-light flex flex-col items-center justify-center py-16 px-8 rounded-[40px] border-[20px] border-light">
				<div className="p-4 border-4 border-dark rounded-2xl mb-6">
					<Image width={48} height={48} src="/assets/flag.png" alt="flag" />
				</div>
				<div className="flex flex-col items-center justify-center lg:w-1/2 text-center">
					<h4 className="mb-4 font-semibold text-3xl lg:text-5xl ">
						Segera Gunakan Lusty
					</h4>
					<p className="text-xl lg:text-2xl mb-6 ">
						Dapatkan menu makanan harianmu dengan harga yang murah
					</p>
				</div>
				<Link href="/menu">
					<a className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
						Pesan Sekarang
					</a>
				</Link>
			</div>
		</div>
	);
};

export default GetStarted;
