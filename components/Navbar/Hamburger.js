import React from "react";

const Hamburger = ({ isOpen }) => {
	return (
		<>
			<div
				className={`w-10 h-1.5  ${
					isOpen && "rotate-45 absolute top-3 left-0"
				} bg-darkest-blue rounded-lg transition-all`}
			></div>
			<div
				className={`w-10 h-1.5 ${
					isOpen ? "translate-x-full" : "translate-x-0"
				} bg-darkest-blue rounded-lg transition-all`}
			></div>
			<div
				className={`w-10 h-1.5  ${
					isOpen && "-rotate-45 absolute top-1"
				} bg-darkest-blue rounded-lg transition-all`}
			></div>
		</>
	);
};

export default Hamburger;
