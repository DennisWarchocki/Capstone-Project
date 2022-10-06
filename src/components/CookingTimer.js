import {
	StyledContainer,
	StyledClock,
	StyledTimeunits,
	StyledRealtime,
	StyledSection,
} from '../components/styled/StyledTimer';

const CookingTimer = ({timerDays, timerHours, timerMinutes, timerSeconds}) => {
	return (
		<>
			<StyledContainer>
				<StyledSection>
					<StyledClock>
						<StyledSection>
							<StyledRealtime>{timerDays}</StyledRealtime>
							<StyledTimeunits>Days</StyledTimeunits>
						</StyledSection>
						<span>:</span>
						<StyledSection>
							<StyledRealtime>{timerHours}</StyledRealtime>
							<StyledTimeunits>Hours</StyledTimeunits>
						</StyledSection>
						<span>:</span>
						<StyledSection>
							<StyledRealtime>{timerMinutes}</StyledRealtime>
							<StyledTimeunits>Minutes</StyledTimeunits>
						</StyledSection>
						<span>:</span>
						<StyledSection>
							<StyledRealtime>{timerSeconds}</StyledRealtime>
							<StyledTimeunits>Seconds</StyledTimeunits>
						</StyledSection>
					</StyledClock>
				</StyledSection>
			</StyledContainer>
		</>
	);
};

CookingTimer.defaultProps = {
	timerDays: 1,
	timerHours: 11,
	timerMinutes: 11,
	timerSeconds: 11,
};

export default CookingTimer;
