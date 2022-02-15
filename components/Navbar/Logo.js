import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
	return (
		<>
			<Link href="/">
				<a className="hidden xl:block">
					<Image height={60} width={145} src="/assets/logo-xl.png" alt="logo" />
				</a>
			</Link>
			<Link href="/">
				<a className="xl:hidden">
					<Image
						height={78}
						width={70}
						src="/assets/logo-mobile.png"
						alt="logo"
					/>
				</a>
			</Link>
		</>
	);
};

export default Logo;
