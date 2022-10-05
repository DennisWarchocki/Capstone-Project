import styled from 'styled-components';

// upper div ( right under the Fragment)
export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	margin: 0;
	padding: 0;
	background-color: lightseagreen;
`;

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 1rem;
`;

export const StyledClock = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 350px;
	height: 180px;
	margin: auto;
	padding: 0;
	border: 2px solid silver;
	border-radius: 15px;
	background-color: cornflowerblue;
	box-shadow: 0 0 4px 12px;
	color: aquamarine;
	text-shadow: 1px 1px 7px;
`;
export const StyledRealtime = styled.p`
	margin: 0;
	padding: 0;
	font-size: 4rem;
`;

export const StyledTimeunits = styled.small`
	margin: 0;
	padding: 0;
	color: silver;
	text-shadow: none;
`;
