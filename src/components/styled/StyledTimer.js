import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 50vh;
	margin: 0;
	padding: 0;
`;

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 12px;
	text-align: center;
`;

export const StyledClock = styled.div`
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	width: 275px;
	padding: 20px;
	border-radius: 15px;
	background: rgba(0, 0, 0, 0.5);
	color: white;
`;
export const StyledRealtime = styled.p`
	margin: 0;
	padding: 0;
	font-size: 2rem;
`;

export const StyledTimeunits = styled.small`
	margin: 0;
	padding: 0;
	color: white;
	text-shadow: none;
`;
