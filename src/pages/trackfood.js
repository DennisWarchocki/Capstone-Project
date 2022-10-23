import Head from 'next/head';

import {BackgroundSoup} from '../components/backgrounds/Background';
import FoodForm from '../components/FoodForm';
import Layout from '../components/Layout';

export default function Trackfood() {
	return (
		<>
			<Head>
				<title key="title">Magic Meals</title>
				<meta
					key="You can search for a Meal"
					name="Magic Meals"
					content="provides Meals and Recipes with links to a cooking guide"
				/>
			</Head>
			<BackgroundSoup />
			<Layout />
			<FoodForm />
		</>
	);
}
