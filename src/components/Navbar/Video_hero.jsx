import React from 'react'

const Video_hero = () => {
  return (
    <>
        <div className="video_hero-"></div>
      <video
        className="video_hero"
        preload="auto"
        autoPlay={true}
        playsInline=""
        muted={true}
        volume="0"
        loop
      >
        <source
          src="assets/videos/hero video coffee market-503.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};

export default Video_hero