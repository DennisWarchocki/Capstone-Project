import styled from 'styled-components';

export const StyledHeadbanner = styled.div`
	margin-top: 58px;
	padding: 22px 20px;
	background-color: #009150;
	font-size: x-large;
	text-align: center;
`;

export const StyledFootbanner = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	padding: 22px 20px;
	background-color: yellow;
	font-size: x-large;
	text-align: center;
`;

export const StyledNavUl = styled.ul`
	display: flex;
	position: sticky;
	justify-content: space-evenly;
	width: 100%;
	margin: 0;
	margin-bottom: 40px;
	padding: 0;
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
