import Image from "next/image";
import Link from "next/link";
import React from "react";

const Kalori = () => {
	return (
		<div className="h-full w-full bg-gradient-to-br from-yellow to-light flex flex-col items-center justify-center text-center py-16 px-8 border-[20px] border-light">
			<div className="p-4 border-4 border-dark rounded-2xl mb-6">
				<Image width={48} height={48} src="/assets/flag.png" alt="flag" />
			</div>
			<h4 className="mb-12 font-semibold text-3xl lg:text-5xl">
				Belum Tau Kebutuhan Kalorimu?
			</h4>
			<Link href="/consultation/caloriecounter">
				<a className="px-8 py-4 rounded-2xl font-semibold border-2 border-dark-red hover:bg-dark-red hover:text-light transition-all">
					Hitung Kalori
				</a>
			</Link>
		</div>
	);
};

export default Kalori;
