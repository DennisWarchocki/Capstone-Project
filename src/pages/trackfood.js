import Head from 'next/head';

import FoodForm from '../components/FoodForm';
import Layout from '../components/Layout';
import {StyledTitle} from '../components/styled/StyledTitle';

export default function AboutPage() {
	return (
		<Layout>
			<Head>
				<title key="title">Food Tracker</title>
				<meta key="description" name="Food tracker" content="track your food and macro" />
			</Head>
			<StyledTitle>Food Formular</StyledTitle>
			<FoodForm />
		</Layout>
	);
}
