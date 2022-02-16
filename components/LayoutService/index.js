import Image from "next/image";
import React from "react";
import SectionTitle from "../SectionTitle";

const LayoutService = ({
	title,
	titleImage,
	titleAlt,
	description,
	imageName,
	imageAlt,
	ordering,
	id,
}) => {
	return (
		<section id={`${id}`} className="pt-32 my-[120px]">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<div className="grid grid-cols-12 gap-y-10 lg:gap-10">
					<div
						className={`col-span-12 mb-12 lg:mb-0 text-center lg:text-left lg:col-span-6 ${
							ordering === 0 ? "lg:order-1" : "lg:order-2"
						}`}
					>
						<SectionTitle
							title={`${title}`}
							imageName={`${titleImage}`}
							imageAlt={`${titleAlt}`}
						/>
						<p className="mt-12">{description}</p>
					</div>
					<div
						className={`col-span-12 lg:col-span-6 m-auto ${
							ordering === 0 ? "lg:order-2" : "lg:order-1"
						}`}
					>
						<div
							className={`w-[300px] xl:w-[500px] h-[300px] xl:h-[500px] relative before:rounded-3xl before:absolute before:-top-10 ${
								ordering === 0
									? "lg:before:-right-10 before:right-0"
									: "lg:before:-left-10 before:left-0"
							} before:content-[''] before:transition-width before:w-full before:h-full before:bg-gradient-to-br before:from-dark-red before:to-dark-blue`}
						>
							<Image
								layout="fill"
								src={`/assets/${imageName}`}
								alt={`${imageAlt}`}
								className="object-cover object-right rounded-3xl"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LayoutService;
