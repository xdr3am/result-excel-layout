import React from 'react';

const AppReviewsVideo = ({video}) => {
  const videoRef = React.useRef(null)

  return (
    <video
      ref={videoRef}
      onMouseOver={() => videoRef.current.play()}
      onMouseLeave={() => videoRef.current.pause()}
      onClick={() => videoRef.current.muted = !videoRef.current.muted}
      muted
      loop
    >
      <source type="video/mp4" src={video}/>
    </video>
  );
};

export default AppReviewsVideo;