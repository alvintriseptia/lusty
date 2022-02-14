import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { Footer, LayoutPost, Navbar } from "../../Components";
import Head from "next/head";
import { data } from "./data";

const Post = () => {
	const router = useRouter();
	const { slug } = router.query;
	const [dataPost, setDataPost] = useState([]);

	useEffect(() => {
		const post = data.find((item) => item.id === parseInt(slug));
		if (post) setDataPost(post);
	}, [slug]);

	return (
		<>
			<Head>
				<title>Lusty | {slug}</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<>
				<main
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Navbar />
					<LayoutPost data={dataPost} />
					<Footer />
				</main>
			</>
		</>
	);
};

export default Post;
