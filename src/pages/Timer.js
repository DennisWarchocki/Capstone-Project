import {useState, useEffect} from 'react';

import CookingTimer from '../components/CookingTimer';

function Timer() {
	const [timerDays, setTimerDays] = useState();
	const [timerHours, setTimerHours] = useState();
	const [timerMinutes, setTimerMinutes] = useState();
	const [timerSeconds, setTimerSeconds] = useState();

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
