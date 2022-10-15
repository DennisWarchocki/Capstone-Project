import {useState, useEffect} from 'react';

import {BackgroundOven} from '../components/backgrounds/Background';
import CookingTimer from '../components/CookingTimer';
import Layout from '../components/Layout';
import {StyledSelectContainer} from '../components/styled/StyledContainer';

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

	const selectHours = Array.from({length: 24}).map((_, i) => {
		return i;
	});

	const selectMinutes = Array.from({length: 60}).map((_, i) => {
		return i;
	});

	return (
		<>
			<BackgroundOven />
			<Layout />

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
						<label htmlFor="hours">hours:</label>
						<select name="hours">
							{selectHours.map(option => {
								return <option key={option}>{option}</option>;
							})}
						</select>
						<label htmlFor="minutes">minutes:</label>
						<select name="minutes">
							{selectMinutes.map(option => {
								return <option key={option}>{option}</option>;
							})}
						</select>
						<button type="submit">Start</button>
						<button
							onClick={event => {
								event.preventDefault;
								setTimerHours(0);
								setTimerMinutes(0);
								setTimerSeconds(0);
							}}
						>
							End
						</button>
					</form>
				</StyledSelectContainer>
			</section>
		</>
	);
}
