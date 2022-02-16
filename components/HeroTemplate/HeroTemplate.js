import Link from "next/link";

const HeroTemplate = ({ title, description, href }) => {
	return (
		<header className="py-32 lg:py-48 h-screen">
			<div className="container mx-auto px-4 lg:px-0 max-w-screen-xl h-full">
				<div className="flex h-full flex-col gap-y-10 justify-center items-center text-center text-light">
					<h1 className="text-4xl sm:text-6xl lg:text-8xl spa font-bold leading-tight tracking-widest">
						{title}
					</h1>
					<p className="text-2xl lg:text-4xl leading-relaxed">{description}</p>
					<Link href={`${href}`}>
						<a>Start</a>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default HeroTemplate;
