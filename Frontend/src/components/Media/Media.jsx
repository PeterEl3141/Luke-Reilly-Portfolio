import "./Media.css";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const Media = ({ media = [], filmTitle = "" }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!media.length) return null;

  const activeItem = media[activeIndex];

  return (
    <section className="media">
      <div className="media-left">
        <div className="media-thumbnails">
          {media.map((item, index) => (
            <button
              key={item.id || index}
              className={`media-thumbnailButton ${
                index === activeIndex ? "active" : ""
              }`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View media item ${index + 1} for ${filmTitle}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="media-thumbnailImage"
              />
              <span className="media-thumbnailOverlay" />
            </button>
          ))}
        </div>
      </div>

      <div className="media-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeItem.id || activeIndex}
            className="media-content"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <p className="media-kicker">Media</p>

            <h2 className="media-title">{activeItem.title}</h2>

            <p className="media-excerpt">{activeItem.excerpt}</p>

            {activeItem.link && (
              <Link to={activeItem.link} className="media-button">
                {activeItem.buttonText || "Read full article"}
              </Link>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Media;