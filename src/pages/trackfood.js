import Head from 'next/head';

import {BackgroundSoup} from '../components/backgrounds/Background';
import FoodForm from '../components/FoodForm';
import Layout from '../components/Layout';

export default function Trackfood() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta
					key="You can save here what you eat today"
					name="Food tracker"
					content="track your food and macros"
				/>
			</Head>
			<BackgroundSoup />
			<Layout />
			<FoodForm />
		</>
	);
}
