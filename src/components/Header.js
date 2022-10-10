import {StyledNavListItems, StyledNavUl} from './styled/StyledNav';

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
