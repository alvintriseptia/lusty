import Image from "next/image";
import React from "react";

const MenuDetail = ({ lookMenu }) => {
	return (
		<section id="detail" className="pt-36">
			<div className="bg-light-red/30 w-full h-full rounded-3xl">
				<div className="grid grid-cols-12 lg:gap-x-10">
					<div className="col-span-12 lg:col-span-5">
						<div className="w-full h-[300px] bg-light relative rounded-xl">
							<Image
								layout="fill"
								src={`/assets/${lookMenu.imageName}.png`}
								alt={lookMenu.imageAlt}
								className="object-contain"
							/>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-7 p-6 lg:p-0">
						<div className="mt-4">
							<div className="flex justify-between items-center lg:pr-8">
								<h3 className="text-lg lg:text-2xl font-semibold">
									{lookMenu.title}
								</h3>
								<p>{lookMenu.kalori}kkal</p>
							</div>
							<p className="text-sm">Rp{lookMenu.harga}</p>
							<p className="mt-2">{lookMenu.deskripsi}</p>
						</div>
						<div className="mt-4">
							<h3 className="font-medium">Bahan :</h3>
							<ul className="list-disc list-inside">
								{lookMenu.bahan.map((item, index) => (
									<li key={index}>{item}</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default MenuDetail;
