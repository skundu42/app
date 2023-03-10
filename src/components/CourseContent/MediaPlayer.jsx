import React from 'react';
import './../../../node_modules/video-react/dist/video-react.css';
import {
    Player, ControlBar,
    ReplayControl,
    ForwardControl,
    CurrentTimeDisplay,
    TimeDivider,
    PlaybackRateMenuButton,
    VolumeMenuButton,
    BigPlayButton
} from 'video-react';

const MediaPlayer = ({Video}) => {
    return (
        <div>
            <Player autoPlay src={Video}>
                                <BigPlayButton position="center" />
                                    <ControlBar >
                                        
                                        <ReplayControl seconds={10} order={1.1} />
                                        <CurrentTimeDisplay order={4.1} />
                                        <TimeDivider order={4.2} />
                                        <PlaybackRateMenuButton rates={[5, 2, 1, 0.5, 0.1]} order={7.1} />
                                        <VolumeMenuButton />
                                    </ControlBar>
                                </Player>
        </div>
    );
}

export default MediaPlayer;