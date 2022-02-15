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

export default function Menu() {
	return (
		<>
			<Head>
				<title>Lusty | Menu</title>
				<link rel="icon" href="/favicon.ico" />
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
							title="Menu Lusty"
							description="Penyedia jasa makanan sehat dan bergizi 
yang bisa diatur sesuai kebutuhanmu.
"
							href="#menu"
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