import styled from 'styled-components';

export const StyledHeadbanner = styled.div`
	padding: 22px 20px;
	background-color: #009150;
	font-size: x-large;
	text-align: center;
`;

export const StyledNavbar = styled.li`
	flex-grow: 1;
	padding: 22px 20px;
	transition: 0.6s;
	background-color: #009150;
	color: white;
	font-size: x-large;
	list-style: none;
	text-align: center;
	text-decoration: none;
	&:hover {
		background: lightslategray radial-gradient(circle, transparent 99%, lightslategray 1%)
			center/15000%;
		color: black;
		text-decoration: underline;
	}
	&:active {
		background: lightslategray radial-gradient(circle, transparent 99%, lightslategray 1%)
			center/15000%;
	}
`;
