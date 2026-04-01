import { useEffect, useRef } from "react";
import Hls from "hls.js";
import "./TrailerVideo.css";

const TrailerVideo = ({
  cloudflareId,
  poster,
  className = "",
  threshold = 0.6,
}) => {
  const videoRef = useRef(null);
  const hlsRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !cloudflareId) return;

    const hlsSrc = `https://videodelivery.net/${cloudflareId}/manifest/video.m3u8`;

    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = hlsSrc;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(hlsSrc);
      hls.attachMedia(video);
      hlsRef.current = hls;
    } else {
      video.src = hlsSrc;
    }

    return () => {
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [cloudflareId]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
  }, [threshold]);

  if (!cloudflareId) return null;

  return (
    <div className={`trailer-video ${className}`}>
      <video
        ref={videoRef}
        className="trailer-video__player"
        controls
        muted
        playsInline
        preload="auto"
        poster={poster}
      />
    </div>
  );
};

export default TrailerVideo;