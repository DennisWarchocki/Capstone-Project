import Head from 'next/head';

import {TestBackground} from '../components/backgrounds/Background';
import Layout from '../components/Layout';

export default function Intro() {
	return (
		<>
			<Head>
				<title key="title">Nutri Trackr</title>
				<meta key="description" name="Intro" content="how to use the app" />
			</Head>
			<TestBackground />
			<Layout />
		</>
	);
}
/*
const [audio, setAudio] = useState(null);
useEffect(() => {
	setAudio(new Audio('../assets/sounds/alarmsound'));
}, []);

function playAlert() {
	audio.play();
}
*/
