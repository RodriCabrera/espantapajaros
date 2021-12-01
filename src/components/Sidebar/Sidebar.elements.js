import styled from "styled-components";
import { ImListNumbered } from "react-icons/im";
import { Link } from "react-scroll";

export const SidebarContainer = styled.div`
	width: 120px;
	color: #cccccc;
	background-color: #495670;
	position: fixed;
	top: 0;
	left: ${(props) => (props.isActive ? "0px" : "-75px")};
	height: 100vh;
	transition: 0.2s all cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
export const SidebarIconList = styled.div`
	color: #64ffda;
	width: 100%;
	text-align: end;
	display: ${(props) => (props.isActive ? "flex" : "none")};
	flex-direction: column;
`;
export const TogglerWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	padding: 0.7rem;
`;
export const SidebarToggler = styled(ImListNumbered)`
	font-size: 1.5rem;
	color: #64ffda;
`;
export const SidebarLink = styled(Link)`
	text-align: center;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		text-shadow: 0px 0px 6px rgba(255, 255, 255, 0.7), 1px 1px 1px #64ffda;
	}
`;
