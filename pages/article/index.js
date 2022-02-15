import { motion } from "framer-motion";
import Head from "next/head";
import { Navbar, Footer, LayoutArticle } from "../../components/index";
import { data } from "../../components/data";

export default function Articles() {
	return (
		<>
			<Head>
				<title>Lusty | Artikel</title>
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
					<LayoutArticle data={data} />
					<Footer />
				</motion.main>
			</>
		</>
	);
}
