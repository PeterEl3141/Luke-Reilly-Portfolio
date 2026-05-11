import { useEffect, useRef } from "react";
import "./TrailerVideo.css";

const TrailerVideo = ({
  src,
  poster,
  className = "",
  threshold = 0.6,
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const playPromise = video.play();

          if (playPromise && typeof playPromise.catch === "function") {
            playPromise.catch(() => {});
          }
        } else {
          video.pause();
        }
      },
      { threshold }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [src, threshold]);

  if (!src) return null;

  return (
    <div className={`trailer-video ${className}`}>
      <video
        ref={videoRef}
        className="trailer-video__player"
        src={src}
        controls
        muted
        playsInline
        preload="metadata"
        poster={poster}
      />
    </div>
  );
};

export default TrailerVideo;