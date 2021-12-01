import React, { useState } from "react";
import {
	SidebarIconList,
	SidebarContainer,
	SidebarLink,
	SidebarToggler,
	TogglerWrapper,
} from "./Sidebar.elements";

const Sidebar = () => {
	const [isActive, setIsActive] = useState(false);
	const handleClick = () => {
		setIsActive(!isActive);
	};
	return (
		<>
			<SidebarContainer onClick={handleClick} isActive={isActive}>
				<TogglerWrapper>
					<SidebarToggler />
				</TogglerWrapper>
				<SidebarIconList isActive={isActive} onClick={handleClick}>
					<SidebarLink
						onClick={handleClick}
						to="capitulo1"
						spy={true}
						smooth={true}
						duration={500}
					>
						1
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo2"
						spy={true}
						smooth={true}
						duration={500}
					>
						2
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo3"
						spy={true}
						smooth={true}
						duration={500}
					>
						3
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo4"
						spy={true}
						smooth={true}
						duration={500}
					>
						4
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo5"
						spy={true}
						smooth={true}
						duration={500}
					>
						5
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo6"
						spy={true}
						smooth={true}
						duration={500}
					>
						6
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo7"
						spy={true}
						smooth={true}
						duration={500}
					>
						7
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo8"
						spy={true}
						smooth={true}
						duration={500}
					>
						8
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo9"
						spy={true}
						smooth={true}
						duration={500}
					>
						9
					</SidebarLink>
					<SidebarLink
						onClick={handleClick}
						to="capitulo10"
						spy={true}
						smooth={true}
						duration={500}
					>
						10
					</SidebarLink>
				</SidebarIconList>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
