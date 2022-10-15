import Head from 'next/head';

import {BackgroundEggs} from '../components/backgrounds/Background';
import {StyledHomeButton} from '../components/styled/StyledNavButton';
import {StyledHeadbanner} from '../components/styled/StyledNew';
export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<BackgroundEggs />
			<StyledHeadbanner>Nutri Trackr</StyledHeadbanner>
			<StyledHomeButton as="a" href="/intro">
				Start
			</StyledHomeButton>
		</>
	);
}
