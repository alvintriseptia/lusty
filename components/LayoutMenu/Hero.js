import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
	return (
		<header className="pb-32 pt-40 lg:mt-32 lg:pt-52 bg-gradient-to-br from-light to-yellow/30 lg:bg-[url('/assets/bgMenu.png')] lg:bg-no-repeat lg:bg-center lg:bg-cover lg:bg-fixed">
			<div className="container mx-auto px-4 max-w-screen-xl">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-6">
						<h1 className="text-5xl lg:text-7xl font-bold">Menu Lusty</h1>
						<p className="text-xl lg:text-2xl mt-3 mb-7 lg:mt-7 lg:mb-14 lg:pr-6">
							Temukan menu kesukaanmu dari pilihan yang Lusty berikan
						</p>
						<div className="flex gap-12 items-center flex-wrap">
							<Link href="#paket">
								<a className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
									Cari Paket Katering
								</a>
							</Link>
							<Link href="#aturmenu">
								<a className="rounded-2xl flex gap-x-3 items-center font-semibold hover:underline">
									<Image
										height={36}
										width={36}
										src="/assets/config.png"
										alt="atur menu"
									/>

									<span>Atur Menu Sendiri</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
