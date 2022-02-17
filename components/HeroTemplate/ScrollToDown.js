import { motion } from "framer-motion";
import React from "react";

const ScrollToDown = () => {
	return (
		<div
			className="
    h-14 w-9 border-2 border-light rounded-full cursor-pointer relative
    "
		>
			<motion.div
				animate={{ y: [0, 25, 0], opacity: [1, 0.5, 0] }}
				transition={{ repeat: Infinity, duration: 1, times: [0, 0.5, 1] }}
				className="absolute top-1 left-1.5 -translate-y-full w-5 h-full fill-light"
			>
				<svg
					version="1.1"
					id="Layer_1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					x="0px"
					y="0px"
					viewBox="0 0 330 330"
					style={{ enableBackground: "new 0 0 24 24" }}
					xmlSpace="preserve"
				>
					<path
						id="XMLID_225_"
						d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
					/>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
					<g></g>
				</svg>
			</motion.div>
		</div>
	);
};

export default ScrollToDown;
