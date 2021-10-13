import React from "react";
import {
	SidebarIconList,
	SidebarContainer,
	SidebarLink,
	SidebarToggler,
} from "./Sidebar.elements";

const Sidebar = () => {
	return (
		<>
			<SidebarContainer>
				<SidebarIconList>
					<SidebarToggler />
					<SidebarLink to="capitulo1" spy={true} smooth={true} duration={500}>
						1
					</SidebarLink>
					<SidebarLink to="capitulo2" spy={true} smooth={true} duration={500}>
						2
					</SidebarLink>
					<SidebarLink to="capitulo3" spy={true} smooth={true} duration={500}>
						3
					</SidebarLink>
					<SidebarLink to="capitulo4" spy={true} smooth={true} duration={500}>
						4
					</SidebarLink>
					<SidebarLink to="capitulo5" spy={true} smooth={true} duration={500}>
						5
					</SidebarLink>
					<SidebarLink to="capitulo6" spy={true} smooth={true} duration={500}>
						6
					</SidebarLink>
					<SidebarLink to="capitulo7" spy={true} smooth={true} duration={500}>
						7
					</SidebarLink>
					<SidebarLink to="capitulo8" spy={true} smooth={true} duration={500}>
						8
					</SidebarLink>
					<SidebarLink to="capitulo9" spy={true} smooth={true} duration={500}>
						9
					</SidebarLink>
					<SidebarLink to="capitulo10" spy={true} smooth={true} duration={500}>
						10
					</SidebarLink>
				</SidebarIconList>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
