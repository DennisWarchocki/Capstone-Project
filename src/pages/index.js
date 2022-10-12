import Head from 'next/head';

import {StyledBackground} from '../components/styled/StyledBackground';
import {StyledNavButton} from '../components/styled/StyledNavButton';
import {StyledNavbar} from '../components/styled/StyledNew';
import {StyledHeadbanner} from '../components/styled/StyledNew';
export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<StyledBackground>
				<StyledHeadbanner>Nutri Trackr</StyledHeadbanner>
				<StyledNavButton as="a" href="/timer">
					Start
				</StyledNavButton>
				<StyledNavbar as="a" href="/">
					Home
				</StyledNavbar>
			</StyledBackground>
		</>
	);
}
