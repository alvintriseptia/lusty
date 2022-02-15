import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "../Navbar/Logo";
import { navLinks } from "../navLinks";

const Footer = () => {
	return (
		<footer className="w-full bg-gradient-to-br from-dark-blue to-dark-red pt-16 pb-4 text-light mt-[160px]">
			<div className="container mx-auto px-4 lg:px-[120px]">
				<div className="flex flex-wrap gap-y-10 justify-between">
					<Logo />
					<div className="flex gap-14 items-center">
						<Image
							width={24}
							height={24}
							src="/assets/whatsapp.png"
							alt="Whatsapp"
						/>
						<Image
							width={24}
							height={24}
							src="/assets/linkedin.png"
							alt="Linkedin"
						/>
						<Image
							width={24}
							height={24}
							src="/assets/twitter.png"
							alt="Twitter"
						/>
						<Image
							width={24}
							height={24}
							src="/assets/instagram.png"
							alt="Instagram"
						/>
					</div>
				</div>
				<div className="flex flex-wrap gap-y-10 justify-between mt-10">
					<ul className="flex flex-col xl:flex-row gap-4">
						{navLinks.map((link, index) => (
							<li key={index}>
								<Link href={`/${link.href}`}>
									<a className="hover:underline">{link.title}</a>
								</Link>
							</li>
						))}
					</ul>
					<div className="flex flex-col gap-y-4">
						<span>
							Email: <a href="#email">lustycatering@gmail.com</a>
						</span>
						<span>
							Telepon: <a href="#tel">081234567890</a>
						</span>
					</div>
				</div>
				<strong className="text-sm mt-24 inline-block">
					@Copyright 2022 - KSAD UAJY - Alvin Triseptia Mairis
				</strong>
			</div>
		</footer>
	);
};

export default Footer;
