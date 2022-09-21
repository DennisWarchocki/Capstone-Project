import Head from 'next/head';

import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Nutrition Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<h1>Nutrition Trackr</h1>
		</Layout>
	);
}
