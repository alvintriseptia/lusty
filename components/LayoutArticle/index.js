import React from "react";
import CardArticle from "./CardArticle";

const LayoutArticle = ({ data }) => {
	return (
		<section className="py-40">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<h1 className="text-4xl lg:text-7xl text-center font-bold mb-12">
					Artikel
				</h1>
				<div className="flex flex-col gap-y-8">
					{data.map((item, index) => (
						<CardArticle
							key={index}
							title={item.title}
							date={item.date}
							article={item.article}
							imageName={item.imageName}
							imageAlt={item.imageAlt}
							id={item.id}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default LayoutArticle;
