import Image from "next/image";
import React from "react";
import SectionTitle from "../../SectionTitle";

const Background = () => {
	return (
		<section id="tentang" className="py-32 my-[120px]">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-6 order-2 mt-12 lg:mt-0 lg:order-1 text-center lg:text-left">
						<SectionTitle
							title="Latar Belakang"
							imageName="background"
							imageAlt="latar belakang"
						/>
						<p className="mt-12">
							Lusty ingin membantu mengatasi permasalahan yang sering terjadi di
							Indonesia: Pola Makan.
						</p>
						<p className="my-4">
							Untuk menjadi pribadi yang sehat, hal yang seringkali lupa
							diperhatikan ialah bagaimana jenis makanan yang kita konsumsi.
							Kita perlu memperhatikan apa saja makanan-makanan yang masuk ke
							dalam perut kita karena makanan tersebut akan menjadi sumber
							energi utama kita untuk beraktivitas. Dengan mengatur jenis
							makanan yang baik, kita bisa menjadi pribadi yang lebih sehat.
						</p>
						<p>
							Lusty menyediakan banyak pilihan menu yang bisa Anda pilih untuk
							makanan harian anda sesuai dengan jumlah kalori dan nutrisi yang
							dibutuhkan. Anda dapat menggunakan fitur penghitung kalori untuk
							mengetahui jumlah kalori yang anda butuhkan perharinya, dan juga
							tersedia konsultasi kesehatan gratis untuk mengetahui apa saja
							kebutuhan nutrisi Anda.
						</p>
					</div>
					<div className="relative col-span-12 lg:col-span-6 m-auto order-1 lg:order-2">
						<Image
							width={450}
							height={450}
							src="/assets/latarbelakang.png"
							alt="latar belakang"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Background;
