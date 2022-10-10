import {useState, useEffect} from 'react';

import CookingTimer from '../components/CookingTimer';
import Layout from '../components/Layout';
import {StyledInput, StyledInputTime} from '../components/styled/StyledInput';

function Timer() {
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();
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
			<Layout>
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
					<StyledInput
						type="text"
						maxLength="2"
						value={userInputDays}
						onChange={event => {
							setUserInputDays(event.target.value);
						}}
					/>
					<label>Hours:</label>
					<StyledInput
						type="text"
						maxLength="2"
						value={userInputHours}
						onChange={event => {
							setUserInputHours(event.target.value);
						}}
					/>
					<label>Minutes:</label>
					<StyledInput
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
			</Layout>
		</>
	);
}

export default Timer;
