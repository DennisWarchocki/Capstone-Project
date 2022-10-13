import {useState, useEffect} from 'react';

import CookingTimer from '../components/CookingTimer';
import {StyledSelectContainer} from '../components/styled/StyledContainer';
import {StyledNavUl} from '../components/styled/StyledNav';
import {StyledFootbanner, StyledNavbar} from '../components/styled/StyledNew';

export default function Timer() {
	const [timerHours, setTimerHours] = useState(0);
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timerSeconds, setTimerSeconds] = useState(0);
	const [userInputHours, setUserInputHours] = useState(0);
	const [userInputMinutes, setUserInputMinutes] = useState(0);

	const minutes = userInputMinutes * 60000;
	const hours = userInputHours * (60000 * 60);

	useEffect(() => {
		const now = Date.now() + minutes + hours;

		function getTime() {
			const time = now - Date.now();
			if (time > 0) {
				setTimerHours(Math.floor((time / (1000 * 60 * 60)) % 24));

				setTimerMinutes(Math.floor((time / 1000 / 60) % 60));

				setTimerSeconds(Math.floor((time / 1000) % 60));
			} else {
				setTimerHours(0);
				setTimerMinutes(0);
				setTimerSeconds(0);
			}
		}

		const interval = setInterval(() => getTime(now), 1000);
		return () => clearInterval(interval);
	}, [minutes, hours]);

	const mins = Array.from({length: 23}).map((_, i) => {
		return i + 1;
	});

	return (
		<>
			<section name="Header">
				<StyledNavUl>
					<StyledNavbar as="a" href="/">
						Intro
					</StyledNavbar>

					<StyledNavbar as="a" href="/timer">
						Timer
					</StyledNavbar>
					<StyledNavbar as="a" href="/trackfood">
						Food Tracker
					</StyledNavbar>
				</StyledNavUl>
			</section>
			<section name="Countdown">
				<CookingTimer
					timerHours={timerHours}
					timerMinutes={timerMinutes}
					timerSeconds={timerSeconds}
				/>
			</section>
			<section name="userSelectInput">
				<StyledSelectContainer>
					<form
						onSubmit={event => {
							event.preventDefault();
							const formData = new FormData(event.target);
							const formValues = Object.fromEntries(formData);
							setUserInputHours(formValues.hours);
							setUserInputMinutes(formValues.minutes);
						}}
					>
						<label for="hours">hours:</label>
						<select name="hours">
							{mins.map(option => {
								return <option key={option}>{option}</option>;
							})}
						</select>
						<label for="minutes">minutes:</label>
						<select name="minutes">
							<option>01</option>
							<option>02</option>
							<option>03</option>
							<option>04</option>
							<option>05</option>
							<option>06</option>
						</select>
						<input type="submit" />
					</form>
				</StyledSelectContainer>
			</section>
			<StyledFootbanner />
		</>
	);
}
