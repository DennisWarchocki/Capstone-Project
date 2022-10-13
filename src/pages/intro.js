import Head from 'next/head';

import Header from '../components/Header';

export default function Intro() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="Intro" content="how to use the app" />
			</Head>
			<Header />
			<p> Hallo</p>
		</>
	);
}
