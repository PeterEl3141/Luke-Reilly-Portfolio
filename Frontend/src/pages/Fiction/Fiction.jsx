import "./Fiction.css";
import { motion } from "framer-motion";
import fictionData from "../../data/fictionData";
import DoodleButton from "../../components/DoodleButton/DoodleButton";
import FictionDoodles from "../../components/FictionDoodles/FictionDoodles";


const itemVariants = {
  hiddenLeft: {
    opacity: 0,
    x: -40,
  },
  hiddenRight: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Fiction = () => {
  return (
    <section className="fiction-page">
      <div className="fiction-header">
        <h1 className="fiction-page-title">Fiction</h1>
        <p className="fiction-page-intro">
          A selection of short fiction, essays, and longer-form writing.
        </p>
      </div>

      <div className="fiction-list">
      {fictionData.map((item, index) => {
  const isReversed = index % 2 !== 0;

  return (
    <motion.article
      key={item.slug}
      className={`fiction-item ${isReversed ? "reverse" : ""}`}
      initial={isReversed ? "hiddenRight" : "hiddenLeft"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={itemVariants}
    >
      <FictionDoodles
        slug={item.slug}
        isReversed={isReversed}
        articleIndex={index}
      />

      <div className="fiction-item-imageWrap">
        <img
          src={item.image}
          alt={item.title}
          className="fiction-item-image"
        />
      </div>

      <div className="fiction-item-content">
        <p className="fiction-item-medium">{item.medium}</p>

        <h2 className="fiction-item-title">{item.title}</h2>

        <div className="fiction-item-meta">
          <span>{item.genre}</span>
          <span>{item.date}</span>
        </div>

        <p className="fiction-item-publication">{item.publication}</p>

        <p className="fiction-item-excerpt">{item.excerpt}</p>

        <DoodleButton
          href={item.link}
          external={true}
          className="fiction-item-link"
        >
          {item.linkLabel}
        </DoodleButton>
      </div>
    </motion.article>
  );
})}
      </div>
    </section>
  );
};

export default Fiction;