import {Fragment} from "react";
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Title: React.FC<{
  titleText: string;
  titleColor: string;
}> = ({titleText, titleColor, subTitleText}) => {
  const videoConfig = useVideoConfig();
  const frame = useCurrentFrame();
  const text = titleText.split(' ').map((t) => ` ${t} `);
  const subText = subTitleText.split('  ').map((t) => `${t}`);
  return (
    <Fragment>
    <h1
      style={{
        fontFamily: 'Futura, Helvetica, Arial',
        fontWeight: '500',
        fontSize: 80,
        textAlign: 'right',
        position: 'absolute',
        bottom: 180,
        width: '100%',
      }}
    >
      {text.map((t, i) => {
        return (
          <span
            key={t}
            style={{
              color: titleColor,
              marginLeft: 10,
              marginRight: 10,
              transform: `scale(${spring({
                fps: videoConfig.fps,
                frame: frame - i * 5,
                config: {
                  damping: 100,
                  stiffness: 200,
                  mass: 0.5,
                },
              })})`,
              display: 'inline-block',
            }}
          >
						{t}
					</span>
        );
      })}
    </h1>
    </Fragment>
  );
};
