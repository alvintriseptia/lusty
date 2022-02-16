import { motion } from "framer-motion";
import Head from "next/head";
import { Navbar, Footer, LayoutContact } from "../components/index";

export default function Contact() {
	return (
		<>
			<Head>
				<title>Lusty | Kontak</title>
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
					<LayoutContact />
				</motion.main>
			</>
		</>
	);
}
