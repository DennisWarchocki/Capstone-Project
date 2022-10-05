const CookingTimer = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
	return (
		<>
			<section className="timer-container">
				<section className="timer">
					<div className="clock">
						<section>
							<p>{timerDays}</p>
							<small>Days</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerHours}</p>
							<small>Hours</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerMinutes}</p>
							<small>Minutes</small>
						</section>
						<span>:</span>
						<section>
							<p>{timerSeconds}</p>
							<small>Seconds</small>
						</section>
					</div>
				</section>
			</section>
		</>
	);
};

CookingTimer.defaultProps = {
	timerDays: 0,
	timerHours: 12,
	timerMinutes: 45,
	timerSeconds: 22,
};

export default CookingTimer;
