import { motion } from "framer-motion";
import Head from "next/head";
import { Navbar, Footer, LayoutMenu } from "../components/index";

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
					<Navbar />
					<LayoutMenu />
					<Footer />
				</motion.main>
			</>
		</>
	);
}
