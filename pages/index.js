import { motion } from "framer-motion";
import Head from "next/head";
import {
	Navbar,
	Hero,
	Customer,
	Service,
	Adventage,
	GetStarted,
	Menu,
	Testimonial,
	FAQ,
	Article,
	Footer,
} from "../components/index";

export default function Home() {
	return (
		<>
			<Head>
				<title>Lusty | Katering Sehat</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<motion.main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="bg-gradient-to-br from-yellow to-light">
						<Navbar />
						<Hero />
					</div>
					<Customer />
					<Service />
					<Adventage />
					<GetStarted />
					<Menu />
					<Testimonial />
					<FAQ />
					<Article />
					<Footer />
				</motion.main>
			</>
		</>
	);
}
