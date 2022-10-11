import {StyledNavListItems, StyledNavUl} from './styled/StyledNav';

export default function Header() {
	return (
		<>
			<StyledNavUl>
				<StyledNavListItems as="a" href="/">
					Home
				</StyledNavListItems>
				<StyledNavListItems as="a" href="/timer">
					Timer
				</StyledNavListItems>
				<StyledNavListItems as="a" href="/trackfood">
					Food Tracker
				</StyledNavListItems>
			</StyledNavUl>
		</>
	);
}
