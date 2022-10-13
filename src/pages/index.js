import Head from 'next/head';

import {StyledBackground} from '../components/styled/StyledBackground';
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
				<StyledNavbar as="a" href="/timer">
					Start
				</StyledNavbar>
			</StyledBackground>
		</>
	);
}
