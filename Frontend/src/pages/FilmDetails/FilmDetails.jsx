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
        <h1 className="film-details-title">{film.title}</h1>

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

              {film.externalLinks && film.externalLinks.length > 0 && (
                <motion.div
                  className="film-details-links"
                  variants={metadataItemVariants}
                >
                  {film.externalLinks.map((link, index) => (
                    <DoodleButton
                      key={index}
                      href={link.url}
                      external={true}
                      className="film-details-doodleLink"
                    >
                      {link.label}
                    </DoodleButton>
                  ))}
                </motion.div>
              )}
            </div>
          )}
        </motion.div>
      )}

      {hasValue(film.description) && (
        <motion.div
          className="film-details-description"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
        >
          <p>{film.description}</p>
        </motion.div>
      )}

      {film.scriptImages && film.scriptImages.length > 0 && (
        <motion.div
          className="film-details-scriptImages"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="film-details-sectionTitle">
            Selected Script Materials
          </h2>

          {film.scriptImages.map((scriptImage) => (
            <motion.div
              key={scriptImage.id}
              className="film-details-imageWrap"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <figure className="film-details-scriptPaper">
                <img
                  src={scriptImage.image}
                  alt={scriptImage.alt || `${film.title} script material`}
                  className="film-details-scriptImage"
                />

                {hasValue(scriptImage.caption) && (
                  <figcaption className="film-details-scriptCaption">
                    {scriptImage.caption}
                  </figcaption>
                )}
              </figure>
            </motion.div>
          ))}
        </motion.div>
      )}

      {film.trailer?.cloudflareId && (
        <motion.div
          className="film-details-trailerWrap"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
        >
          <TrailerVideo
            cloudflareId={film.trailer.cloudflareId}
            poster={film.trailer.poster || film.image}
          />
        </motion.div>
      )}

      {hasValue(film.image) && (
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
      )}

      <PitchDeck pitchPhotos={film.pitchPhotos} filmTitle={film.title} />

      {film.media && film.media.length > 0 && (
        <Media media={film.media} filmTitle={film.title} />
      )}
    </section>
  );
};

export default FilmDetails;