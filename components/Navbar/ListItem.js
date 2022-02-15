import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const ListItem = ({ title, href }) => {
	const router = useRouter();
	return (
		<Link href={`/${href}`}>
			<a
				className={`relative before:absolute before:-bottom-1 before:rounded before:content-[''] before:w-0 before:transition-width before:hover:w-full before:ease-in-out before:h-1 before:bg-darkest-blue ${
					router.pathname === `/${href}` ? "before:w-3/4 font-semibold" : ""
				} `}
			>
				{title}
				<div className=""></div>
			</a>
		</Link>
	);
};

export default ListItem;
