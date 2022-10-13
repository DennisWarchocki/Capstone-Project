import Head from 'next/head';

import {StyledNavUl} from '../components/styled/StyledNav';
import {StyledNavbar} from '../components/styled/StyledNew';

export default function Intro() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
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
			<p>hallo hallo</p>
		</>
	);
}
