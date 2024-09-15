import React from 'react';

const VideoBackground = ({ children }) => {
  return (
    <div className="relative">
      <video autoPlay loop muted playsInline className="absolute right-0 top-0 min-w-full min-h-full w-auto h-auto object-cover">
        <source src={process.env.PUBLIC_URL + '/assets/autumn.mp4'} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
