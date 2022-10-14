import Head from 'next/head';

import Header from '../components/Header';
import {StyledFootbanner} from '../components/styled/StyledNew';

export default function Intro() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="Intro" content="how to use the app" />
			</Head>
			<p> Hallo</p>
			<Header />
			<StyledFootbanner />
		</>
	);
}
