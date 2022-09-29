import styled from 'styled-components';

export const LabelAsDone = styled.label`
	flex: 1;
	text-decoration: ${props => (props.done ? `line-through` : `none`)};
`;
