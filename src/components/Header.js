import {StyledNavUl, StyledNavbar} from './styled/StyledNav';

export default function Header() {
	return (
		<div>
			<StyledNavUl>
				<StyledNavbar as="a" href="/intro">
					Intro
				</StyledNavbar>
				<StyledNavbar as="a" href="/timer">
					Timer
				</StyledNavbar>
				<StyledNavbar as="a" href="/trackfood">
					Food Tracker
				</StyledNavbar>
			</StyledNavUl>
		</div>
	);
}
