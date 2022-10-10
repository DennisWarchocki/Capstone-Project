import styled from 'styled-components';

export const StyledNavListItems = styled.li`
	flex-grow: 1;
	padding: 17px 20px;
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
	padding: 0;
	margin: 0;
	list-style: none;
`;
