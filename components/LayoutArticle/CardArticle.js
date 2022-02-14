import Image from "next/image";
import React from "react";

const CardArticle = ({ id, title, date, article, imageName, imageAlt }) => {
	return (
		<div className="shadow-lg grid grid-cols-12">
			<div className="col-span-12 lg:col-span-8">
				<div className="pl-5 py-4 flex flex-col gap-y-4">
					<div>
						<h2 className="text-2xl font-semibold">{title}</h2>
						<span className="text-sm font-light">{date}</span>
					</div>
					<p className="line-clamp-2">{article}</p>
					<a className="underline font-medium" href={`/articles/${id}`}>
						Baca artikel
					</a>
				</div>
			</div>
			<div className="col-span-12 lg:col-span-4">
				<div className="w-full h-full relative">
					<Image
						layout="fill"
						src={`/assets/${imageName}`}
						alt={imageAlt}
						className="object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default CardArticle;
