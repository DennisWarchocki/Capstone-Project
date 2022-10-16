import styled from 'styled-components';

export default function Footer() {
	return <StyledFooter />;
}

const StyledFooter = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 22px 20px;
	background-color: #009150;
	font-size: x-large;
	text-align: center;
`;
