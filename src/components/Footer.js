import styled from 'styled-components';

export default function Footer() {
	return (
		<StyledFooter>
			<div>ᘻᗩᘜᓰᑢ ᘻᘿᗩᒪS</div>
		</StyledFooter>
	);
}

const StyledFooter = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	padding: 22px 20px;
	background-color: #009150;
	color: white;
	font-size: x-large;
	text-align: center;
	text-decoration: underline;
`;
