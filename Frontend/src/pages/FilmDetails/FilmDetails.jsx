import "./FilmDetails.css";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import filmsData from "../../data/filmsData";
import Media from "../../components/Media/Media";
import TrailerVideo from "../../components/TrailerVideo/TrailerVideo";
import PitchDeck from "../../components/PitchDeck/PitchDeck";
import DoodleButton from "../../components/DoodleButton/DoodleButton";

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

const hasValue = (value) => {
  return value !== undefined && value !== null && String(value).trim() !== "";
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

  const leftDetails = [
    { label: "Year", value: film.year },
    { label: "Runtime", value: film.runtime },
    { label: "Format", value: film.format },
  ].filter((item) => hasValue(item.value));

  const rightDetails = [
    { label: "Role", value: film.role },
    { label: "Genre", value: film.genre },
    { label: "Credits", value: film.credits },
  ].filter((item) => hasValue(item.value));

  const hasDetails = leftDetails.length > 0 || rightDetails.length > 0;
  const hasActions = film.externalLinks?.length > 0 || film.scriptDownload?.file;

  return (
    <section className="film-details">
      <div className="film-details-marginalia">
        <img src="/images/mv1.png" alt="" />
        <img src="/images/mv2.png" alt="" />
        <img src="/images/mv4.png" alt="" />
      </div>

      <motion.div
        className="film-details-header"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h1 className="film-details-title">
          {film.title}

          {film.subtitleTitle && (
            <span className="film-details-title-secondary">
              {" "}
              {film.subtitleTitle}
            </span>
          )}
        </h1>

        {hasValue(film.subheading) && (
          <p className="film-details-subheading">{film.subheading}</p>
        )}
      </motion.div>

      {film.accolades && film.accolades.length > 0 && (
        <motion.div
          className="film-details-accolades"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {film.accolades.map((accolade) => (
            <img
              key={accolade.id}
              src={accolade.image}
              alt={accolade.alt || ""}
              className="film-details-accolade-image"
            />
          ))}
        </motion.div>
      )}

      {hasDetails && (
        <motion.div
          className="film-details-info"
          variants={metadataContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {leftDetails.length > 0 && (
            <div className="film-details-column">
              {leftDetails.map((item) => (
                <motion.div
                  key={item.label}
                  className="film-details-item"
                  variants={metadataItemVariants}
                >
                  <span className="film-details-label">{item.label}</span>
                  <span className="film-details-value">{item.value}</span>
                </motion.div>
              ))}
            </div>
          )}

          {rightDetails.length > 0 && (
            <div className="film-details-column">
              {rightDetails.map((item) => (
                <motion.div
                  key={item.label}
                  className="film-details-item"
                  variants={metadataItemVariants}
                >
                  <span className="film-details-label">{item.label}</span>
                  <span className="film-details-value">{item.value}</span>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      )}

      {film.description && (
        <motion.div
          className="film-details-description"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          {Array.isArray(film.description) ? (
            film.description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))
          ) : (
            <p>{film.description}</p>
          )}
        </motion.div>
      )}

      {hasActions && (
        <motion.div
          className="film-details-actions"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          {film.externalLinks?.map((link, index) => (
            <DoodleButton
              key={index}
              href={link.url}
              external={true}
              className="film-details-doodleLink"
            >
              {link.label}
            </DoodleButton>
          ))}

          {film.scriptDownload?.file && (
            <DoodleButton
              href={film.scriptDownload.file}
              external={true}
              download
              className="film-details-doodleLink"
            >
              {film.scriptDownload.label || "Download the Treatment"}
            </DoodleButton>
          )}
        </motion.div>
      )}

      <PitchDeck pitchPhotos={film.pitchPhotos} filmTitle={film.title} />

      {film.trailer?.src && (
  <motion.div
    className="film-details-trailerWrap"
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
  >
    <TrailerVideo
      src={film.trailer.src}
      poster={film.trailer.poster || film.image}
    />
  </motion.div>
)}

      {film.images && film.images.length > 0 && (
        <motion.div
          className="film-details-gallery"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
        >
          {film.images.map((image, index) => (
            <motion.div
              key={index}
              className="film-details-imageWrap"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.55 + index * 0.08,
                ease: "easeOut",
              }}
            >
              <img
                src={image}
                alt={`${film.title} still ${index + 1}`}
                className="film-details-image"
              />
            </motion.div>
          ))}
        </motion.div>
      )}

      {film.quotesOnFilm && film.quotesOnFilm.length > 0 && (
        <motion.div
          className="film-details-quotes"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: "easeOut" }}
        >
          {film.quotesOnFilm.map((item, index) => (
            <div key={index} className="film-details-quoteItem">
              <blockquote className="film-details-quote">
                “{item.quote}”
              </blockquote>

              <p className="film-details-quoteAttribution">
                {item.attribution}
              </p>
            </div>
          ))}
        </motion.div>
      )}

      {film.media && film.media.length > 0 && (
        <Media media={film.media} filmTitle={film.title} />
      )}
    </section>
  );
};

export default FilmDetails;