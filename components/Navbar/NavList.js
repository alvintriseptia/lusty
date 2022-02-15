import React from "react";
import ListItem from "./ListItem";

const NavList = ({ list }) => {
	return (
		<div className="col-span-9 xl:col-span-6 xl:m-auto">
			<ul className="flex flex-col gap-y-10 mb-10 xl:mb-0 xl:gap-y-0 xl:flex-row xl:gap-x-10 xl:items-center">
				{list.map((link, index) => (
					<li key={index}>
						<ListItem title={link.title} href={link.href} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default NavList;
