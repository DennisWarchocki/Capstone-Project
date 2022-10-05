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
	timerDays: 0,
	timerHours: 12,
	timerMinutes: 45,
	timerSeconds: 22,
};

export default CookingTimer;
