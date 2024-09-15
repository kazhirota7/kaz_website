import React, { useRef, useEffect } from 'react';

const VideoBackground = ({ children }) => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

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
        <source src={process.env.PUBLIC_URL + '/assets/autumn.mp4'} type="video/mp4" />
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
