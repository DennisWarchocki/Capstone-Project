import Head from 'next/head';

import Layout from '../components/Layout';
import {StyledTitle} from '../components/styled/StyledTitle';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<StyledTitle>Deckblatt</StyledTitle>
			<ol>
				<li>put a img here</li>
				<li>make a start button in the middle</li>
				<li>remove navbar at the top</li>
			</ol>
		</Layout>
	);
}
