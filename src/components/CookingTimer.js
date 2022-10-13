import {
	StyledContainer,
	StyledClock,
	StyledTimeunits,
	StyledRealtime,
	StyledSection,
} from '../components/styled/StyledTimer';

//add timerSeconds to display the Seconds aswell -V-
const CookingTimer = ({timerHours, timerMinutes, timerSeconds}) => {
	return (
		<>
			<StyledContainer>
				<StyledSection>
					<StyledClock>
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
							<StyledTimeunits>Minutes</StyledTimeunits>
						</StyledSection>
					</StyledClock>
				</StyledSection>
			</StyledContainer>
		</>
	);
};

CookingTimer.defaultProps = {
	timerDays: 0,
	timerHours: 0,
	timerMinutes: 0,
	timerSeconds: 0,
};

export default CookingTimer;
