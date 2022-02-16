import { motion } from "framer-motion";
import Head from "next/head";
import {
	Navbar,
	Footer,
	HeroTemplate,
	LayoutService,
} from "../components/index";

export default function Service() {
	const data = [
		{
			id: "kateringsehat",
			title: "Katering Sehat",
			titleImage: "eat",
			titleAlt: "food",
			description:
				"Lusty menyediakan katering sehat untuk kebutuhan Kamu dengan menu yang berkualitas dan bergizi.",
			imageName: "kateringsehat.jpg",
			imageAlt: "katering sehat",
			ordering: 0,
		},
		{
			id: "aturmenu",
			title: "Atur Menu",
			titleImage: "menu",
			titleAlt: "menu",
			description:
				"Lusty menyediakan katering sehat untuk kebutuhan Kamu dengan menu yang berkualitas dan bergizi.",
			imageName: "aturmenu.jpg",
			imageAlt: "Atur Menu",
			ordering: 1,
		},
		{
			id: "konsultasi",
			title: "Konsultasi",
			titleImage: "chat-gold",
			titleAlt: "konsultasi",
			description:
				"Lusty menyediakan katering sehat untuk kebutuhan Kamu dengan menu yang berkualitas dan bergizi.",
			imageName: "konsultasi.jpg",
			imageAlt: "konsultasi",
			ordering: 0,
		},
	];
	return (
		<>
			<Head>
				<title>Lusty | Layanan</title>
				<link rel="icon" href="/assets/logo-mobile.png" />
			</Head>
			<>
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="bg-gradient-to-br from-light-blue to-black-blue">
						<Navbar />
						<HeroTemplate
							title="Layanan Lusty"
							description="Cari tau apa saja yang kami sediakan untuk memenuhi kebutuhan anda dalam menjaga kesehatan
"
							href="#kateringsehat"
						/>
					</div>
					{data.map((item, index) => (
						<LayoutService key={index} {...item} />
					))}
					<Footer />
				</motion.main>
			</>
		</>
	);
}
