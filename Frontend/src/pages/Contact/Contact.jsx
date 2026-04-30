import "./Contact.css";
import { motion } from "framer-motion";
import ContactForm from "../../components/ContactForm/ContactForm";

const Contact = () => {
  return (
    <section className="contact-page">
      <motion.div
  className="contact-header"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="contact-header-inner">
    
    {/* LEFT: text */}
    <div className="contact-header-text">
  <p className="contact-kicker">Contact</p>

  <div className="contact-title-row">
    <h1 className="contact-title">Luke Reilly</h1>

    
    <div className="contact-title-arrows">
  <img src="/images/down-arrow.png" alt="" className="contact-title-arrow arrow-one" />
  <img src="/images/down-arrow.png" alt="" className="contact-title-arrow arrow-two" />
  <img src="/images/down-arrow.png" alt="" className="contact-title-arrow arrow-three" />
  <img src="/images/down-arrow.png" alt="" className="contact-title-arrow arrow-four" />
  <img src="/images/down-arrow.png" alt="" className="contact-title-arrow arrow-five" />
</div>
  </div>
</div>

    {/* RIGHT: images */}
    <div className="contact-header-images">
      <div className="contact-header-imageBlock">
        <img src="/images/at-amaas2.jpeg" alt="At the Africa Movie Academy Awards" />
        <p>At the Africa Movie Academy Awards (Africa's Biggest Film Festival) for Small Gods</p>
      </div>

      <div className="contact-header-imageBlock">
        <img src="/images/sg-premier.jpeg" alt="At the Small Gods Premier" />
        <p>At the Small God's Premier</p>
      </div>

    </div>
  </div>
</motion.div>

      <div className="contact-grid">
        <motion.div
          className="contact-column contact-bio"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p>
            Luke Reilly is a screenwriter, director and published short story
            writer whose co-directed short film debut, Meat, was produced by
            Scala Productions and shot in Uganda. It was selected for the César
            Académie’s Golden Nights Programme, Slamdance, and won Best Short at
            the 2021 AMAAs (Africa’s biggest film awards). It was officially
            endorsed by UNESCO and Survival International.
          </p>

          <p>
            Luke followed this up with his screenplay, Small Gods, funded by
            Sovereign Films (known for Triangle of Sadness), which received nine
            nominations at the 2025 AMAAs and won Best Feature at the
            BIFA-qualifying Cornwall Film Festival. It is set for a cinema
            release this year.
          </p>

          <p>
            His writer-director debut, The Love Song of J Alfred Prufrock, is
            set to be released this year and stars Titanic’s Jonny Phillips. His
            fiction has appeared online and in print in Ink, Sweat and Tears,
            Buoy Press and Firewords. He also writes essays online under the
            search-optimisable but pretentious synonym, Eubulus Kane, and has
            completed a screenplay about Arctic explorers with big, bushy
            beards.
          </p>
        </motion.div>

        <motion.div
          className="contact-column contact-details"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          <div className="contact-block">
            <h2>Email</h2>
            <a href="mailto:luke@example.com">luke@example.com</a>
          </div>

          <div className="contact-block">
            <h2>Instagram</h2>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              @lukereilly
            </a>
          </div>

          <div className="contact-block">
            <h2>Representation</h2>
            <p>Representation details here if relevant.</p>
          </div>

          <div className="contact-block">
            <h2>Availability</h2>
            <p>
              Open to directing work, screenwriting projects, script reading,
              and selected collaborations.
            </p>
          </div>
        </motion.div>
      </div>
      <div className="contact-form-section">
  <div className="contact-form-wrapper">
    <ContactForm />
  </div>

  <div className="contact-form-images">
    <div className="contact-form-imageBlock">
      <img src="/images/at-cff.jpeg" alt="At the Cornwall Film Festival" />
      <p>At the Cornwall Film Festival, for Small Gods 2025</p>
    </div>

    <div className="contact-form-imageBlock">
      <img src="/images/amaa-performance.jpeg" alt="AMAA Performance" />
      <p>A Performance at the Africa Movie Academy Awards 2025</p>
    </div>
  </div>
</div>

<motion.div
  className="contact-bottom-gallery"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="contact-bottom-imageBlock contact-bottom-imageBlock-large">
    <img src="/images/manchester1.jpeg" alt="Description here" />
    <p>At the Manchester Film Festival</p>
  </div>

  <div className="contact-bottom-imageBlock">
    <img src="/images/manchester2.jpeg" alt="Description here" />
    <p>At the Manchester Film Festival</p>
  </div>

  <div className="contact-bottom-imageBlock">
    <img src="/images/manchester3.jpeg" alt="Description here" />
    <p>At the Manchester Film Festival</p>
  </div>
</motion.div>
    </section>
    
  );
};

export default Contact;