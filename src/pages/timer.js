import {useState, useEffect} from 'react';

import CookingTimer from '../components/CookingTimer';
import {StyledInputTime} from '../components/styled/StyledInput';
import {StyledNavUl} from '../components/styled/StyledNav';
import {StyledNavbar} from '../components/styled/StyledNew';

function Timer() {
	const [timerDays, setTimerDays] = useState(0);
	const [timerHours, setTimerHours] = useState(0);
	const [timerMinutes, setTimerMinutes] = useState(0);
	const [timerSeconds, setTimerSeconds] = useState(0);
	const [userInputDays, setUserInputDays] = useState(0);
	const [userInputHours, setUserInputHours] = useState(0);
	const [userInputMinutes, setUserInputMinutes] = useState(0);
	const [userInputSeconds, setUserInputSeconds] = useState(0);

	const seconds = userInputSeconds * 1000;
	const minutes = userInputMinutes * 60000;
	const hours = userInputHours * (60000 * 60);
	const days = userInputDays * (60000 * 60 * 24);

	useEffect(() => {
		const now = Date.now() + seconds + minutes + hours + days;

		function getTime() {
			const time = now - Date.now();
			if (time > 0) {
				setTimerDays(Math.floor(time / (24 * 60 * 60 * 1000)));

				setTimerHours(Math.floor((time / (1000 * 60 * 60)) % 24));

				setTimerMinutes(Math.floor((time / 1000 / 60) % 60));

				setTimerSeconds(Math.floor((time / 1000) % 60));
			} else {
				setTimerDays(0);
				setTimerHours(0);
				setTimerMinutes(0);
				setTimerSeconds(0);
			}
		}

		const interval = setInterval(() => getTime(now), 1000);
		return () => clearInterval(interval);
	}, [seconds, minutes, hours, days]);

	return (
		<>
			<StyledNavUl>
				<StyledNavbar as="a" href="/">
					Home
				</StyledNavbar>

				<StyledNavbar as="a" href="/timer">
					Timer
				</StyledNavbar>
				<StyledNavbar as="a" href="/trackfood">
					Food Tracker
				</StyledNavbar>
			</StyledNavUl>
			<CookingTimer
				timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
			<form
				onSubmit={event => {
					event.preventDefault();
					setUserInputDays('');
				}}
			>
				<label>Days:</label>
				<StyledInputTime
					type="text"
					size="20"
					maxLength="2"
					value={userInputDays}
					onChange={event => {
						setUserInputDays(event.target.value);
					}}
				/>
				<label>Hours:</label>
				<StyledInputTime
					type="text"
					maxLength="2"
					value={userInputHours}
					onChange={event => {
						setUserInputHours(event.target.value);
					}}
				/>
				<label>Minutes:</label>
				<StyledInputTime
					type="text"
					maxLength="2"
					value={userInputMinutes}
					onChange={event => {
						setUserInputMinutes(event.target.value);
					}}
				/>
				<label>Seconds:</label>
				<StyledInputTime
					type="text"
					maxLength="2"
					value={userInputSeconds}
					onChange={event => {
						setUserInputSeconds(event.target.value);
					}}
				/>
			</form>
		</>
	);
}

export default Timer;
