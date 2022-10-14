import Head from 'next/head';

import {StyledHeadbanner} from '../components/styled/StyledNew';
import {StyledFootbanner} from '../components/styled/StyledNew';

export default function Intro() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="Intro" content="how to use the app" />
			</Head>
			<p> Hallo</p>
			<StyledHeadbanner>
				<p>Hi</p>
			</StyledHeadbanner>
			<StyledFootbanner />
		</>
	);
}
