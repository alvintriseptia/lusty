import { useState } from "react";

const Accordion = ({ question, answer }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="w-full py-4 bg-light-blue flex justify-between px-10 mt-6 rounded-3xl">
			<div
				className={`relative w-3/4 my-auto ${isOpen ? "" : "overflow-clip"}`}
			>
				<span className="font-semibold">{question}</span>
				<p
					className={`w-full ${
						isOpen ? "min-h-fit py-6" : "h-0 py-0"
					} transition-all  bg-light-blue`}
				>
					{answer}
				</p>
			</div>
			<span
				onClick={() => setIsOpen(!isOpen)}
				className="w-8 h-8 bg-dark-red rounded-full flex justify-center items-center font-semibold text-yellow text-2xl cursor-pointer"
			>
				{isOpen ? "-" : "+"}
			</span>
		</div>
	);
};

export default Accordion;
