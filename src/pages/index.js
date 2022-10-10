import Head from 'next/head';
import Link from 'next/link';

import {StyledTitle} from '../components/styled/StyledTitle';

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="description" content="Track nutrition and be happy" />
			</Head>
			<StyledTitle>Frontpage</StyledTitle>
			<div>
				<ol>
					<li>put a img here</li>
					<li>make a start button in the middle</li>
					<li>remove navbar at the top</li>
				</ol>
			</div>
			<Link href="/timer">Start your journey!</Link>
		</>
	);
}
