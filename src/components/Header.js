import {StyledNavUl, StyledNavbar} from './styled/StyledNew';

export default function Header() {
	return (
		<StyledNavUl>
			<StyledNavbar as="a" href="/">
				HOME
			</StyledNavbar>
			<StyledNavbar as="a" href="/trackfood">
				RECIPES
			</StyledNavbar>
			<StyledNavbar as="a" href="/timer">
				TIMER
			</StyledNavbar>
		</StyledNavUl>
	);
}
