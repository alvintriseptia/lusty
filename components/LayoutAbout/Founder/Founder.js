import Image from "next/image";
import React from "react";
import SectionTitle from "../../SectionTitle";

const Founder = () => {
	return (
		<section>
			<div className="container mx-auto px-4  max-w-screen-xl my-[160px]">
				<div className="grid grid-cols-12">
					<div className="col-span-12 lg:col-span-6 m-auto">
						<div className="min-w-[300px] max-w-[400px] h-[400px] rounded-card relative bg-gradient-to-br from-light-red to-dark-red/20">
							<Image
								layout="fill"
								src="/assets/alvin.png"
								alt="Alvin Triseptia"
								className="object-cover object-top"
							/>
						</div>
					</div>
					<div className="col-span-12 lg:col-span-6 mt-12 lg:mt-0 text-center lg:text-left">
						<SectionTitle
							title="Siapa Orang di Balik Lusty?"
							imageName="anonymous"
							imageAlt="anonymous"
						/>
						<div className="mt-12">
							<h3 className="font-semibold">Alvin Triseptia Mairis</h3>
							<span>Founder &#38; CEO</span>
						</div>
						<q className="mt-8 inline-block">
							Lusty didirikan tidak hanya untuk menyediakan berbagai macam menu
							makanan sehat yang dapat dinikmati para konsumer, tetapi juga
							edukasi mengenai kesehatan makanan itu sendiri. Kedepannya
							diharapkan masyarakat Indonesia bisa lebih sadar mengenai pola
							makan yang sedang mereka lakukan dan menjaga kesehatannya yang
							dimulai dari makanan yang dikonsumsi tiap harinya.
						</q>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Founder;
