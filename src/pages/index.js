import Head from 'next/head';

import FoodForm from '../components/FoodForm';
import Layout from '../components/Layout';
import {StyledTitle} from '../components/styled/StyledTitle';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<StyledTitle>Nutri Trackr</StyledTitle>
			<FoodForm />
		</Layout>
	);
}
