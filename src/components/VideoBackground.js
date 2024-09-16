import React, { useRef, useEffect, useState } from 'react';

const VideoBackground = ({ children }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoSrc, setVideoSrc] = useState('');
  console.log("Video:", videoSrc)


  useEffect(() => {
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        if (videoRef.current) {
          videoRef.current.style.height = `${entry.contentRect.height}px`;
        }
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }


    return () => {
      if (containerRef.current) {
        resizeObserver.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const getSeasonVideo = () => {
      const month = new Date().getMonth();
      if (month >= 2 && month <= 4) return 'spring.mp4';
      if (month >= 5 && month <= 7) return 'summer.mp4';
      if (month >= 8 && month <= 10) return 'autumn.mp4';
      return 'winter.mp4';
    };

    setVideoSrc('/assets/' + getSeasonVideo());
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <video 
        ref={videoRef}
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute right-0 top-0 w-full object-cover"
      >
        <source src={videoSrc} type="video/mp4" />
        {/* <source src={videoSrc} type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
