import { motion } from "framer-motion";
import Head from "next/head";
import { Navbar, Footer, LayoutCalorieCounter } from "../../components/index";

export default function CalorieCounter() {
	return (
		<>
			<Head>
				<title>Lusty | Konsultasi - Hitung Kalori</title>
				<link rel="icon" href="/assets/logo-mobile.png" />
			</Head>
			<>
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Navbar />
					<LayoutCalorieCounter />
					<Footer />
				</motion.main>
			</>
		</>
	);
}
