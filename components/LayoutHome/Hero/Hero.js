import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<header className="py-32 lg:py-48">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-7">
						<h1 className="text-5xl lg:text-7xl font-bold">
							Ubah Kebiasaan <span className="text-light-red">Makanmu</span>
						</h1>
						<p className="text-xl lg:text-2xl mt-3 mb-7 lg:mt-7 lg:mb-14 lg:pr-6">
							Selalu perhatikan kesehatanmu dimulai dari makanan yang kamu
							konsumsi tiap harinya
						</p>
						<div className="flex gap-12 items-center flex-wrap">
							<Link href="/menu">
								<a className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
									Cari Menu
								</a>
							</Link>
							<Link href="/consultation">
								<a className="rounded-2xl flex gap-x-3.5 items-center font-semibold hover:underline">
									<Image
										height={36}
										width={36}
										src="/assets/chat.png"
										alt="konsultasi"
									/>

									<span>Konsultasi</span>
								</a>
							</Link>
						</div>
					</div>
					<div className="hidden lg:block lg:col-span-5 relative">
						<div className="absolute right-0 top-0 w-full max-h-[600px] rounded-card bg-gradient-to-br from-light-blue to-dark-blue border-[20px] border-light overflow-hidden">
							<Image
								priority
								width={458}
								height={685}
								layout="responsive"
								className="w-full h-full "
								src="/assets/hero.png"
								alt="Man with vegetables"
							/>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Hero;
