import { motion } from "framer-motion";
import React from "react";

const ButtonLink = ({ name, href }) => {
	return (
		<motion.a
			whileHover={{ scaleX: 1.1 }}
			whileTap={{ scale: 0.8 }}
			transition={{ duration: 0.2 }}
			className="col-span-9 xl:col-span-3 mr-auto xl:mr-0 xl:ml-auto font-medium rounded py-2 px-4 border-2 border-darkest-blue"
			href={`${href}`}
		>
			{name}
		</motion.a>
	);
};

export default ButtonLink;
