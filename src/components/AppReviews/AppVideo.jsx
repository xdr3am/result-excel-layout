import React from 'react';

const AppVideo = ({video}) => {
  const videoRef = React.useRef(null)

  return (
    <video
      ref={videoRef}
      onMouseOver={() => videoRef.current.play()}
      onMouseLeave={() => videoRef.current.pause()}
      onClick={() => videoRef.current.requestFullscreen()}
      muted
      loop
    >
      <source type="video/mp4" src={video}/>
    </video>
  );
};

export default AppVideo;