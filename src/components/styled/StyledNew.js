import styled from 'styled-components';

export const StyledHeadbanner = styled.div`
	padding: 22px 20px;
	background-color: #0bda51;
	font-size: x-large;
	text-align: center;
`;

export const StyledUpperDiv = styled.div`
	color: white;
`;

export const StyledNavbar = styled.div`
	padding: 22px 20px;
	transition: 0.8s;
	background-color: #0bda51;
	color: white;
	font-size: x-large;
	text-decoration: none;
	&:hover {
		background: #eef2e6 radial-gradient(circle, transparent 10%, #eef2e6 99%) center/15000%;
		color: black;
		text-decoration: underline;
	}
	&:active {
		background: #eef2e6 radial-gradient(circle, transparent 10%, #eef2e6 99%) center/15000%;
	}
`;
