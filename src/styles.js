import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	html {
		font-size: 16px;
	}
	body {
		margin: 0;
		padding: 0;
		background-color:#00563f;
		font-size: 1rem;
	}
`;
