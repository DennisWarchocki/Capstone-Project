import {StyledNavListItems, StyledNavUl} from './styled/StyledNav';

/* const Navigation = styled.nav`
	overflow: hidden;
	background-color: grey;
`;
*/
//<StyledNavButton as="a" href="/timer">
//<StyledNavButton as="a" href="/timer">

//<StyledDiv>Cooking Timer Cooking Timer</StyledDiv>
export default function Header() {
	return (
		<>
			<StyledNavUl>
				<StyledNavListItems as="a" href="/timer">
					Timer
				</StyledNavListItems>
				<StyledNavListItems as="a" href="/where?">
					Brokkoli
				</StyledNavListItems>
				<StyledNavListItems as="a" href="/where?">
					Kartoffel
				</StyledNavListItems>
			</StyledNavUl>
		</>
	);
}
