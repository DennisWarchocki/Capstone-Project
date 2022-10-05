import Head from 'next/head';

import CookingTimer from '../components/CookingTimer';
import FoodForm from '../components/FoodForm';
import Layout from '../components/Layout';

export default function HomePage() {
	return (
		<Layout>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<h1>Nutri Trackr</h1>
			<FoodForm />
			<CookingTimer />
		</Layout>
	);
}
