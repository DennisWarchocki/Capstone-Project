import Head from 'next/head';
//import {useState, useEffect} from 'react';

//import {StyledInput} from '../components/styled/StyledInput';
import {StyledNavUl, StyledNavbar} from '../components/styled/StyledNav';

/*
function getTimeToEat(start, end) {
	const d = new Date();
	let hour = Math.floor(d.getHours());
	if (hour >= start && hour < end) {
		return 0; // Can Eat
	} else {
		if (hour >= end) {
			let diff = 24 - hour;
			return diff + start;
		} else {
			return start - hour;
		}
	}
}
*/
//const [start, setStart] = useState(0);
//const [end, setEnd] = useState(0);
export default function DietTimer() {
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
			<div></div>
		</>
	);
}

/*
				<p>
					{getTimeToEat(start, end)}
					<StyledInput value={start} />
					<StyledInput value={end} />
				</p>
                */
