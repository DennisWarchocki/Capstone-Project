import styled from 'styled-components';

export const StyledDoneLabel = styled.label`
	flex: 1;
	text-decoration: ${props => (props.done ? `line-through` : `none`)};
`;

//Abstand nach Unten =
