import Image from 'next/image';
import styled from 'styled-components';

import back from '../../assets/Images/back.jpeg';
import eggs from '../../assets/Images/eggs.jpeg';
import oven from '../../assets/Images/oven.jpeg';
import soupbackground from '../../assets/Images/soupbackground.jpeg';

export function TestBackground() {
	return (
		<ImageWrapper>
			<Image src={back} alt="background image" layout="fill" objectFit="cover" />
		</ImageWrapper>
	);
}

export function BackgroundSoup() {
	return (
		<ImageWrapper>
			<Image src={soupbackground} alt="background image" layout="fill" objectFit="cover" />
		</ImageWrapper>
	);
}

export function BackgroundOven() {
	return (
		<ImageWrapper>
			<Image src={oven} alt="background image" layout="fill" objectFit="cover" />
		</ImageWrapper>
	);
}

export function BackgroundEggs() {
	return (
		<ImageWrapper>
			<Image src={eggs} alt="background image" layout="fill" objectFit="cover" />
		</ImageWrapper>
	);
}

const ImageWrapper = styled.div`
	position: fixed;
	z-index: -1;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
`;
