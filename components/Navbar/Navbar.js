import React, { useEffect, useState } from "react";
import ButtonLink from "./ButtonLink";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import NavList from "./NavList";
import { navLinks } from "../navLinks";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrollBackground, setScrollBackground] = useState("bg-transparent");
	const handleMenu = () => {
		setIsOpen(!isOpen);
	};

	const handleScroll = () => {
		if (window.scrollY > 20) {
			setScrollBackground(`bg-light py-6`);
		} else {
			setScrollBackground("bg-transparent");
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`fixed z-50 w-full top-0 left-0 px-0 p-10 ${scrollBackground} transition-all`}
		>
			<div className="container mx-auto px-4 lg:max-w-screen-xl">
				<div className="grid grid-cols-12 items-center">
					<div className="col-span-3">
						<Logo />
					</div>

					<div
						onClick={handleMenu}
						className="flex flex-col space-y-2 relative cursor-pointer overflow-hidden col-span-9 ml-auto text-4xl z-50 xl:hidden h-10"
					>
						<Hamburger isOpen={isOpen} />
					</div>
					<div
						className={`${
							isOpen
								? "block translate-x-0"
								: "translate-x-full xl:translate-x-0"
						} transition-transform col-span-12 xl:col-span-9 xl:mt-0 fixed xl:static bg-light xl:bg-transparent  w-80 xl:w-auto h-full xl:h-auto right-0 top-0 pl-6 pt-36 xl:p-0 z-40`}
					>
						<div className="grid grid-cols-9 text-2xl xl:text-base">
							<NavList list={navLinks} />
							<ButtonLink name="Pesan Sekarang" href="/menu" />
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
