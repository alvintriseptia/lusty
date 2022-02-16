import React from "react";
import Image from "next/image";

const Customer = () => {
	return (
		<div className="w-full py-8 bg-gradient-to-r from-light via-light-blue/40 to-light">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<div className="grid grid-cols-12">
					<div className="col-span-12 xl:col-span-7 mx-auto text-center">
						<h2 className="text-2xl mb-5">
							Kustomer yang puas menggunakan
							<span className="font-semibold"> Lusty</span>
						</h2>
						<div className="flex gap-14 flex-wrap justify-center">
							<Image
								src="/assets/atica.png"
								alt="atica"
								width={63}
								height={63}
							/>
							<Image
								src="/assets/asgardia-2.png"
								alt="asgardia"
								width={63}
								height={63}
							/>
							<Image
								src="/assets/hex-lab.png"
								alt="hex lab"
								width={158}
								height={45}
							/>
							<Image
								src="/assets/liva.png"
								alt="liva"
								width={118}
								height={47}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Customer;
