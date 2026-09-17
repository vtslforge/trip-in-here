import ReactPlayer from "react-player";
import { useState, type CSSProperties } from "react";
import { useParams } from "react-router-dom";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

const VideoPlayer = () => {
  const { url } = useParams();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const storageKey = `video-progress-${url}`;

  // Save current playback position
  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const time = e.currentTarget.currentTime;
    setCurrentTime(time);
    localStorage.setItem(storageKey, time.toString());
  };

  // Get video duration
  const handleDurationChange = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const videoDuration = e.currentTarget.duration;
    setDuration(videoDuration);
  };

  // Restore previous playback position
  const handleLoadedMetadata = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const savedTime = localStorage.getItem(storageKey);
    if (savedTime) {
      e.currentTarget.currentTime = Number(savedTime);
      setCurrentTime(Number(savedTime));
    }
  };

  return (
    <div className="w-full">
      <MediaController
        style={{
          width: "100%",
          aspectRatio: "16/9",
        }}
      >
        <ReactPlayer
          slot="media"
          src={url}
          controls={false}
          onTimeUpdate={handleTimeUpdate}
          onDurationChange={handleDurationChange}
          onLoadedMetadata={handleLoadedMetadata}
          style={
            {
              width: "100%",
              height: "100%",
              "--controls": "none",
            } as CSSProperties & { "--controls": string }
          }
        />

        <MediaControlBar>
          <MediaPlayButton />
          <MediaSeekBackwardButton seekOffset={10} />
          <MediaSeekForwardButton seekOffset={10} />
          <MediaTimeRange />
          <MediaTimeDisplay showDuration />
          <MediaMuteButton />
          <MediaVolumeRange />
          <MediaPlaybackRateButton />
          <MediaFullscreenButton />
        </MediaControlBar>
      </MediaController>

      {/* Debug information */}
      <div className="mt-3 text-sm text-gray-400">
        <p>Current: {currentTime.toFixed(1)}s</p>
        <p>Duration: {duration.toFixed(1)}s</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
