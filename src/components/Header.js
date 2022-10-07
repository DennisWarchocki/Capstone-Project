import {StyledNavButton} from './styled/StyledNavButton';

export default function Header() {
	return (
		<header>
			<nav>
				<StyledNavButton as="a" href="/timer">
					Cooking Timer
				</StyledNavButton>
			</nav>
		</header>
	);
}
