import {Composition} from 'remotion';
import {HelloWorld} from './HelloWorld';
import {Logo} from './HelloWorld/Logo';
import {Subtitle} from './HelloWorld/Subtitle';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition
				id="HelloWorld"
				component={HelloWorld}
				durationInFrames={869*30}
				fps={30}
				width={1280}
				height={720}
				defaultProps={{
					titleText: 'Car data visualization - US KDay, 2021-03-26',
          subTitleText: 'Remotion, Google Street View, Mapbox GL',
					titleColor: '#000',
				}}
			/>
			<Composition
				id="Map"
				component={Subtitle}
				durationInFrames={869*30}
				fps={30}
				width={1280}
				height={720}
			/>
		</>
	);
};
