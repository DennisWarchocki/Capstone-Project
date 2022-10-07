import {useState, useEffect} from 'react';

import CookingTimer from '../components/CookingTimer';
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

	//Ich möchte dass der User z.B. eine Stundenanzahl eintragen kann, und dann der Countdown von dem Wert (z.B. 8h30min) runterzählt evtl statt 'October,8...' einfach Date.now() + (UserInput) = deadline ? und danach bei getTime deadline - date.now

	//Fazit: ------>  -V- Date.now() + (UserTimeInput) = deadline
	const seconds = userInputSeconds * 1000;
	const minutes = userInputMinutes * 60000;
	const hours = userInputHours * (60000 * 60);
	const days = userInputDays * (60000 * 60 * 24);
	//const deadline = '10, 9, 2022 00:15:00 GMT';

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
			<form
				onSubmit={event => {
					event.preventDefault();
					// setUserInput...wie spreche ich mehrere Inputs an?
					setUserInputDays('');
				}}
			>
				<StyledInput
					type="number"
					placeholder="type Days here"
					value={userInputDays}
					maxLength="2"
					onChange={event => {
						//(event.target.value) oder (event.target.UserInputDays?)
						setUserInputDays(event.target.value);
					}}
				/>
				<StyledInput
					type="number"
					placeholder="type hours here"
					value={userInputHours}
					maxLength="2"
					onChange={event => {
						setUserInputHours(event.target.value);
					}}
				/>
				<StyledInput
					type="number"
					placeholder="type Minutes here"
					value={userInputMinutes}
					maxLength="2"
					onChange={event => {
						setUserInputMinutes(event.target.value);
					}}
				/>
				<StyledInputTime
					type="number"
					placeholder="type Seconds here"
					value={userInputSeconds}
					maxLength="2"
					onChange={event => {
						setUserInputSeconds(event.target.value);
					}}
				/>
			</form>

			<CookingTimer
				timerDays={timerDays}
				timerHours={timerHours}
				timerMinutes={timerMinutes}
				timerSeconds={timerSeconds}
			/>
		</>
	);
}

export default Timer;
