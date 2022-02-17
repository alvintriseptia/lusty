import { motion } from "framer-motion";
import Head from "next/head";
import {
	Navbar,
	Footer,
	HeroTemplate,
	LayoutConsultation,
} from "../../components/index";

export default function Consultation() {
	return (
		<>
			<Head>
				<title>Lusty | Konsultasi</title>
				<link rel="icon" href="/assets/logo-mobile.png" />
			</Head>
			<>
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="bg-gradient-to-br from-yellow/20 to-black-yellow">
						<Navbar />
						<HeroTemplate
							title="Konsultasi Lusty"
							description="Dapatkan layanan yang dapat membantu mengetahui kebutuhan makanan Anda
"
							href="#konsultasi"
						/>
					</div>
					<LayoutConsultation />
					<Footer />
				</motion.main>
			</>
		</>
	);
}
