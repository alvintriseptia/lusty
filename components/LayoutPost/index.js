import Image from "next/image";
import Link from "next/link";
import React from "react";

const LayoutPost = ({ data }) => {
	return (
		<section className="pt-40">
			<div className="container mx-auto px-4  max-w-screen-xl">
				<Link href="/article">
					<a className="text-sm font-semibold mb-12">
						&#8592;{" "}
						<span className="underline">Kembali ke halaman artikel</span>
					</a>
				</Link>
				{data.length !== 0 && (
					<>
						<div className="my-12">
							<h1 className="text-3xl lg:text-6xl font-bold mb-4">
								{data.title}
							</h1>
							<span className="font-light">{data.date}</span>
						</div>
						<article className="mb-12">
							<div className="h-[500px] w-full relative">
								<Image
									src={`/assets/${data.imageName}`}
									alt={data.imageAlt}
									className="object-cover"
									layout="fill"
								/>
							</div>
							<div className="mt-12 flex flex-col lg:px-16">
								{data.article.map((item, index) => (
									<p className="mb-6" key={index}>
										{item}
									</p>
								))}
							</div>
						</article>
					</>
				)}
				<Link href="/article">
					<a className="text-sm font-semibold">
						&#8592;{" "}
						<span className="underline">Kembali ke halaman artikel</span>
					</a>
				</Link>
			</div>
		</section>
	);
};

export default LayoutPost;
