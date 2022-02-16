import Image from "next/image";
import Link from "next/link";
import React from "react";

const LayoutConsultation = () => {
	return (
		<section id="konsultasi" className="py-32 my-[120px]">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<div className="grid grid-cols-12 lg:gap-8 gap-y-20">
					<div className="relative col-span-12 lg:col-span-6">
						<div className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-dark-blue to-purple absolute -top-10 left-0 lg:-left-10 flex justify-center items-center">
							<Image
								width={70}
								height={70}
								src="/assets/count.png"
								alt="hitung kalori"
							/>
						</div>
						<div className="w-full bg-yellow/30 rounded-3xl px-8 py-16">
							<div className="flex flex-col gap-y-4 items-center justify-center h-full">
								<h2 className="text-2xl lg:text-5xl font-semibold text-darkest-blue">
									Hitung Kalori
								</h2>
								<p className="mb-8">
									ingin membantu mengatasi permasalahan yang sering terjadi di
									Indonesia: Pola Makan. Untuk menjadi pribadi yang sehat, hal
									yang seringkali lupa diperhatikan ialah bagaimana jenis
									makanan yang kita konsumsi. Kita perlu memperhatikan apa saja
									makanan-makanan yang masuk ke dalam perut kita karena makanan
									tersebut akan menjadi sumber energi utama kita untuk
									beraktivitas. Dengan mengatur jenis makanan yang baik, kita
									bisa menjadi pribadi yang lebih sehat.
								</p>
								<Link href="/consultation/caloriecounter">
									<a className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue">
										Hitung Kalori
									</a>
								</Link>
							</div>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6">
						<div className="relative col-span-12 lg:col-span-6">
							<div className="w-24 h-24 lg:w-36 lg:h-36 rounded-full bg-gradient-to-br from-dark-blue to-purple absolute -top-10 right-0 lg:-right-10 flex justify-center items-center">
								<Image
									width={70}
									height={70}
									src="/assets/chat-light.png"
									alt="konsultasi"
								/>
							</div>
							<div className="w-full bg-yellow/30 rounded-3xl px-8 py-16">
								<div className="flex flex-col gap-y-4 items-center justify-center h-full">
									<h2 className="text-2xl lg:text-5xl font-semibold text-darkest-blue">
										Konsultasi Gizi
									</h2>
									<p className="mb-8">
										ingin membantu mengatasi permasalahan yang sering terjadi di
										Indonesia: Pola Makan. Untuk menjadi pribadi yang sehat, hal
										yang seringkali lupa diperhatikan ialah bagaimana jenis
										makanan yang kita konsumsi. Kita perlu memperhatikan apa
										saja makanan-makanan yang masuk ke dalam perut kita karena
										makanan tersebut akan menjadi sumber energi utama kita untuk
										beraktivitas. Dengan mengatur jenis makanan yang baik, kita
										bisa menjadi pribadi yang lebih sehat.
									</p>
									<a
										rel="noreferrer"
										target="_blank"
										href="https://forms.gle/GecVmdCy25x8ncj86"
										className="px-8 py-4 rounded-2xl font-semibold transition-background-image bg-gradient-to-br from-light-red to-dark-red hover:from-dark-blue"
									>
										Daftar Konsultasi
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LayoutConsultation;
