import styled from 'styled-components';

export const StyledNavListItems = styled.li`
	flex-grow: 1;
	padding: 18px 22px;
	background-color: red;
	color: white;
	font-size: 19px;
	text-align: center;
	text-decoration: none;
	&:hover {
		background-color: black;
	}
`;

export const StyledNavUl = styled.ul`
	display: flex;
	margin: 0;
	padding: 0;
	list-style: none;
`;
