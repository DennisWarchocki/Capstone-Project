import Link from 'next/link';

import {StyledNavButton} from './styled/StyledNavButton';

export default function Header() {
	return (
		<header>
			<nav>
				<StyledNavButton as="a" href="../pages/index">
					Styled Timer
				</StyledNavButton>
				<Link href="">Home</Link>
				<Link href="/timer">Keto Timer</Link>
			</nav>
		</header>
	);
}

//<Button as="a" href="#">Link with Button styles</Button>
