import {StyledBackground} from './styled/StyledBackground';
import {StyledHeadbanner} from './styled/StyledNew';

export default function Header() {
	return (
		<>
			<StyledBackground>
				<StyledHeadbanner as="a" href="/">
					Home
				</StyledHeadbanner>
			</StyledBackground>
		</>
	);
}
