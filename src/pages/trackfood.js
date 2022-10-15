import Head from 'next/head';

import TestBackground from '../components/Background';
import FoodForm from '../components/FoodForm';
import Footer from '../components/Footer';
import Header from '../components/Header';

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
			<TestBackground />
			<Header />
			<FoodForm />
			<Footer />
		</>
	);
}
