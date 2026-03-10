import "./FilmDetails.css";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import filmsData from "../../data/filmsData";

const metadataContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const metadataItemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

const FilmDetails = () => {
  const { slug } = useParams();

  const film = filmsData.find((item) => item.slug === slug);

  if (!film) {
    return (
      <section className="film-details not-found">
        <h1>Film not found</h1>
      </section>
    );
  }

  return (
    <section className="film-details">
      <motion.div
        className="film-details-header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="film-details-title">{film.title}</h1>
        <p className="film-details-subheading">{film.subheading}</p>
      </motion.div>

      <motion.div
        className="film-details-info"
        variants={metadataContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="film-details-column">
          <motion.div
            className="film-details-item"
            variants={metadataItemVariants}
          >
            <span className="film-details-label">Year</span>
            <span className="film-details-value">{film.year}</span>
          </motion.div>

          <motion.div
            className="film-details-item"
            variants={metadataItemVariants}
          >
            <span className="film-details-label">Runtime</span>
            <span className="film-details-value">{film.runtime}</span>
          </motion.div>

          <motion.div
            className="film-details-item"
            variants={metadataItemVariants}
          >
            <span className="film-details-label">Format</span>
            <span className="film-details-value">{film.format}</span>
          </motion.div>
        </div>

        <div className="film-details-column">
          <motion.div
            className="film-details-item"
            variants={metadataItemVariants}
          >
            <span className="film-details-label">Role</span>
            <span className="film-details-value">{film.role}</span>
          </motion.div>

          <motion.div
            className="film-details-item"
            variants={metadataItemVariants}
          >
            <span className="film-details-label">Genre</span>
            <span className="film-details-value">{film.genre}</span>
          </motion.div>

          <motion.div
            className="film-details-item"
            variants={metadataItemVariants}
          >
            <span className="film-details-label">Credits</span>
            <span className="film-details-value">{film.credits}</span>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="film-details-description"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
      >
        <p>{film.description}</p>
      </motion.div>

      <motion.div
        className="film-details-imageWrap"
        initial={{ opacity: 0, scale: 1.02 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        <img
          src={film.image}
          alt={film.title}
          className="film-details-image"
        />
      </motion.div>
    </section>
  );
};

export default FilmDetails;