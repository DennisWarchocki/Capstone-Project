import styled from 'styled-components';

//https://html-color.codes/green
//Background: Malachite green
export const StyledNavListItems = styled.li`
	flex-grow: 1;
	padding: 22px 20px;
	transition: 0.8s;
	background-color: #0bda51;
	color: white;
	font-size: 20px;
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
