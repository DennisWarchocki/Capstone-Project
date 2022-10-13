import {
	StyledContainer,
	StyledClock,
	StyledTimeunits,
	StyledRealtime,
	StyledSection,
} from '../components/styled/StyledTimer';

//add timerSeconds to display the Seconds aswell -V-
const CookingTimer = ({timerDays, timerHours, timerMinutes}) => {
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
