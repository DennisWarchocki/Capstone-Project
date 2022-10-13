import Head from 'next/head';

import {StyledBackground} from '../components/styled/StyledBackground';
import {StyledHomeButton} from '../components/styled/StyledNavButton';
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
				<StyledHomeButton as="a" href="/timer">
					Start
				</StyledHomeButton>
			</StyledBackground>
		</>
	);
}
