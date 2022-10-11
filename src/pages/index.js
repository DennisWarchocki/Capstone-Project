import Head from 'next/head';

import {StyledBackground} from '../components/styled/StyledBackground';
import {StyledNavButton} from '../components/styled/StyledNavButton';
import {StyledTitle} from '../components/styled/StyledTitle';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<StyledBackground>
				<StyledTitle>Frontpage</StyledTitle>
				<div>
					<StyledNavButton as="a" href="/timer">
						Start
					</StyledNavButton>
				</div>
			</StyledBackground>
		</>
	);
}
