import { motion } from "framer-motion";
import Head from "next/head";
import {
	Navbar,
	Footer,
	HeroTemplate,
	Background,
	Founder,
	Reference,
} from "../components/index";

export default function About() {
	return (
		<>
			<Head>
				<title>Lusty | Tentang Kami</title>
				<link rel="icon" href="/assets/logo-mobile.png" />
			</Head>
			<>
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="bg-gradient-to-br from-light-red/30 to-black-red ">
						<Navbar />
						<HeroTemplate
							title="Lusty"
							description="Penyedia jasa makanan sehat dan bergizi 
yang bisa diatur sesuai kebutuhanmu.
"
							href="#tentang"
						/>
					</div>
					<Background />
					<Founder />
					<Reference />
					<Footer />
				</motion.main>
			</>
		</>
	);
}
