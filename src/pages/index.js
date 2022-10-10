import Head from 'next/head';
import Image from 'next/image';

import {StyledNavButton} from '../components/styled/StyledNavButton';
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
				<StyledNavButton as="a" href="/timer">
					Start
				</StyledNavButton>
				<Image src="" width="375px" height="667px" alt="hallo" />
			</div>
		</>
	);
}
//Main Picture here  -^-
