import Head from 'next/head';

import FoodForm from '../components/FoodForm';
import {StyledNavUl} from '../components/styled/StyledNav';
import {StyledNavbar} from '../components/styled/StyledNew';
import {StyledFootbanner} from '../components/styled/StyledNew';

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
			<StyledNavUl>
				<StyledNavbar as="a" href="/intro">
					Intro
				</StyledNavbar>

				<StyledNavbar as="a" href="/timer">
					Timer
				</StyledNavbar>
				<StyledNavbar as="a" href="/trackfood">
					Food Tracker
				</StyledNavbar>
			</StyledNavUl>
			<FoodForm />
			<StyledFootbanner />
		</>
	);
}
