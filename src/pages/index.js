import Head from 'next/head';
import styled from 'styled-components';

import {TestBackground} from '../components/backgrounds/Background';
import Layout from '../components/Layout';
import {StyledCalories} from '../components/styled/StyledNew';

const StyledMainText = styled.div`
	margin-top: 25%;
	font-weight: bold;
`;

const StyledMainItems = styled.li`
	margin: 16px;
	color: white;
`;

const StyledMainList = styled.ul`
	font-size: medium;
	list-style: none;
`;

const StyledHeadline = styled.h2`
	text-align: center;
	text-decoration: underline;
`;

export default function HomePage() {
	return (
		<>
			<Head>
				<title key="title">Magic Meals</title>
				<meta key="Find Meals and Recipes" name="Homepage" content="Landing" />
			</Head>
			<TestBackground />
			<Layout />
			<StyledMainText>
				<StyledCalories>
					<StyledHeadline>How to use the App</StyledHeadline>
					<StyledMainList>
						<StyledMainItems>
							go to RECIPES to search for Magic Meals and Recipes
						</StyledMainItems>
						<StyledMainItems>
							You can add Meals - they are displayed at the bottom
						</StyledMainItems>
						<StyledMainItems>marked meals add up the calories</StyledMainItems>
						<StyledMainItems>
							go to TIMER to set a Timer when you need it for cooking
						</StyledMainItems>
					</StyledMainList>
				</StyledCalories>
			</StyledMainText>
		</>
	);
}
