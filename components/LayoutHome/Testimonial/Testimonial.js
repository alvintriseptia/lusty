import { motion } from "framer-motion";
import React, { useRef } from "react";
import SectionTitle from "../../SectionTitle";
import Image from "next/image";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

const Testimonial = () => {
	const data = [
		{
			name: "Alvin Triseptia",
			job: "CEO",
			testimonial:
				"Lusty adalah tempat yang menyenangkan untuk beristirahat dan menikmati makanan yang sehat",
		},
		{
			name: "Putra",
			job: "Marketing",
			testimonial:
				"Lusty sangat membantu saya dalam menjaga asupan makanan harian saya, sangat bagus untuk kalian yang ingin memiliki pola makan yang sehat",
		},
		{
			name: "Rizky",
			job: "Koki",
			testimonial:
				"Lusty sehat dan murah untuk membeli makanan, saya sangat senang bisa menikmati makanan yang dibeli di sini",
		},
	];
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	return (
		<div className="container mx-auto px-4  max-w-screen-xl my-[160px]">
			<div className="grid grid-cols-12 lg:gap-10">
				<div className="col-span-12 lg:col-span-4 2xl:col-span-5">
					<div className="relative w-full min-h-[300px] h-full border-[20px] border-light  bg-gradient-to-br from-light-blue to-dark-blue rounded-card overflow-hidden">
						<Image
							layout="fill"
							className="object-cover object-left"
							src="/assets/testimonibg.jpg"
							alt="fruits"
						/>
					</div>
				</div>
				<div className="col-span-12 lg:col-span-8 2xl:col-span-7 lg:my-auto mt-12 lg:mt-0 py-10">
					<div>
						<SectionTitle
							imageName="testimonial"
							imageAlt="testimoni"
							title="Testimoni Lusty"
						/>
						<p className="mt-8 mb-24 text-center lg:text-left">
							Lusty selalu berusaha untuk memberikan layanan terbaik kepada para
							konsumen, berikut beberapa konsumer yang memberikan penilaian
							terhadap Lusty.
						</p>
					</div>
					<div className="w-full min-h-[350px] bg-light-blue rounded-3xl">
						<Swiper
							allowTouchMove={false}
							navigation={{
								prevEl: navigationPrevRef.current,
								nextEl: navigationNextRef.current,
							}}
							loop={true}
							onInit={(swiper) => {
								swiper.params.navigation.prevEl = navigationPrevRef.current;
								swiper.params.navigation.nextEl = navigationNextRef.current;
								swiper.navigation.init();
								swiper.navigation.update();
							}}
						>
							{data.map((item, index) => (
								<SwiperSlide className="pt-6 px-9" key={index}>
									<div className="flex gap-x-4 items-center">
										<div className="w-24 h-24 relative rounded-full">
											<Image
												layout="fill"
												className="rounded-full object-cover object-top"
												src={`/assets/profil${index + 1}.jpg`}
												alt={`${item.name}`}
											/>
										</div>
										<div>
											<h5 className="font-semibold">{item.name}</h5>
											<i>{item.job}</i>
										</div>
									</div>
									<q className="inline-block mt-9 mb-14">{item.testimonial}</q>
								</SwiperSlide>
							))}
							<div className="flex gap-x-6 justify-end px-9 py-2">
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									ref={navigationPrevRef}
									className={`w-12 h-12 rounded-full border-2 flex justify-center items-center border-dark-red hover:scale-105`}
								>
									<Image
										width={20}
										height={20}
										src="/assets/left.png"
										alt="left"
									/>
								</motion.button>
								<motion.button
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									ref={navigationNextRef}
									className={`w-12 h-12 rounded-full border-2 flex justify-center items-center border-dark-red hover:scale-105`}
								>
									<Image
										width={20}
										height={20}
										src="/assets/right.png"
										alt="right"
									/>
								</motion.button>
							</div>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
