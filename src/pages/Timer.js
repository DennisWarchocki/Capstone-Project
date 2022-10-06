import {useState, useEffect} from 'react';

import CookingTimer from '../components/CookingTimer';

function Timer() {
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();
	const [userInputDays, setUserInputDays] = useState();
	const [userInputHours, setUserInputHours] = useState();
	const [userInputMinutes, setUserInputMinutes] = useState();
	const [userInputSeconds, setUserInputSeconds] = useState();

	//Ich möchte dass der User z.B. eine Stundenanzahl eintragen kann, und dann der Countdown von dem Wert (z.B. 8h30min) runterzählt evtl statt 'October,8...' einfach Date.now() + (UserInput) = deadline ? und danach bei getTime deadline - date.now

	//Fazit: ------>  -V- Date.now() + (UserTimeInput) = deadline
	const deadline = 'October, 8, 2022';

	function getTime() {
		const time = Date.parse(deadline) - Date.now();
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

	useEffect(() => {
		const interval = setInterval(() => getTime(deadline), 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<>
			<form
				onSubmit={event => {
					event.preventDefault();
					// setUserInput...wie spreche ich mehrere Inputs an?
					setUserInputDays('');
				}}
			>
				<input
					placeholder="type Days here"
					userInputDays={userInputDays}
					onChange={event => {
						//(event.target.value) oder (event.target.UserInputDays?)
						setUserInputDays(event.target.value);
					}}
				/>
				<input
					placeholder="type hours here"
					//value={value} -V-
					userInputHours={userInputHours}
					onChange={event => {
						setUserInputHours(event.target.userInputHours);
					}}
				/>
				<input
					placeholder="type Minutes here"
					userInputMinutes={userInputMinutes}
					onChange={event => {
						setUserInputMinutes(event.target.userInputMinutes);
					}}
				/>
				<input
					placeholder="type Seconds here"
					userInputSeconds={userInputSeconds}
					onChange={event => {
						setUserInputSeconds(event.target.userInputSeconds);
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
