import "./PitchDeck.css";
import { motion } from "framer-motion";

const PitchDeck = ({ pitchPhotos = [], filmTitle = "Film" }) => {
  if (!pitchPhotos || pitchPhotos.length === 0) return null;

  return (
    <motion.section
      className="pitch-deck"
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="pitch-deck-header">
        <p className="pitch-deck-kicker">Pitch Deck</p>
        <h2 className="pitch-deck-title">Selected Visual Materials</h2>
      </div>

      <div className="pitch-deck-grid">
        {pitchPhotos.map((photo, index) => (
          <motion.figure
            key={photo.id}
            className={`pitch-deck-item pitch-deck-item-${(index % 5) + 1}`}
            initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -1 : 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: index * 0.06,
              ease: "easeOut",
            }}
          >
            <div className="pitch-deck-imageWrap">
              <img
                src={photo.image}
                alt={photo.alt || `${filmTitle} pitch deck slide`}
                className="pitch-deck-image"
              />
            </div>

            {photo.caption && (
              <figcaption className="pitch-deck-caption">
                {photo.caption}
              </figcaption>
            )}
          </motion.figure>
        ))}
      </div>
    </motion.section>
  );
};

export default PitchDeck;