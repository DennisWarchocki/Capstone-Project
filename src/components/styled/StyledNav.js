import styled from 'styled-components';

export const StyledNavListItems = styled.li`
	flex-grow: 1;
	padding: 18px 20px;
	transition: 0.8s;
	background-color: red;
	background-position: center;
	color: white;
	font-size: 19px;
	text-align: center;
	text-decoration: none;
	&:hover {
		background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/18000%;
		text-decoration: underline;
	}
	&:active {
		background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/18000%;
	}
`;

export const StyledNavUl = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;

//Ripple effect
/*
.ripple {
	background-position: center;
	transition: background 0.8s;
}
.ripple:hover {
	background: #47a7f5 radial-gradient(circle, transparent 1%, #47a7f5 1%) center/15000%;
}
*/

//Button Style
/* 
.button {
	border: none;
	border-radius: 2px;
	padding: 12px 18px;
	font-size: 16px;
	text-transform: uppercase;
	cursor: pointer;
	color:white;
	background-color: #2196f3;
	box-shadow: 0 0 4px #999;
	outline: none;
}
*/
