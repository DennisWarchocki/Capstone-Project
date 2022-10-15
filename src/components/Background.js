import Image from 'next/image';
import styled from 'styled-components';

import back from '../assets/Images/back.jpeg';

export default function TestBackground() {
	return (
		<ImageWrapper>
			<Image src={back} alt="background image" layout="fill" objectFit="cover" />
		</ImageWrapper>
	);
}

export const ImageWrapper = styled.div`
	position: fixed;
	z-index: -1;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;
