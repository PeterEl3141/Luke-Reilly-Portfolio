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
          <div className="contact-header-text">
            <p className="contact-kicker">Contact</p>

            <div className="contact-title-row">
              <h1 className="contact-title">Luke Reilly</h1>
            </div>

            <img
            className="contact-marginalia contact-marginalia-title"
            src="/images/margi3.png"
            alt=""
            aria-hidden="true"
          />
          </div>

          <div className="contact-header-images">
            <div className="contact-header-imageBlock">
              <img
                src="/images/at-amaas2.jpeg"
                alt="At the Africa Movie Academy Awards"
              />
              <p>
                At the Africa Movie Academy Awards (Africa&apos;s Biggest Film
                Festival) for Small Gods
              </p>
            </div>

            <div className="contact-header-imageBlock">
              <img
                src="/images/sg-premier.jpeg"
                alt="At the Small Gods premiere"
              />
              <p>
                Small Gods&apos; Premiere at the Historic The Poly Cinema,
                Falmouth
              </p>
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
  Luke Reilly is an award-winning screenwriter and director who has been creating work which is satirical, darkly humorous, haunting and heartfelt for over half a decade. His films, scripts and short stories have spanned subjects as diverse as cultural tourism, poverty, existential poetry and period horror.
</p>

<p>
  After a formative year spent teaching English in Uganda, he made his screenwriting debut with the short film, <em>Meat</em>, which was produced by Scala Productions in 2021 and created in close collaboration with a Ugandan cast and crew. The film was selected for the César Académie’s Golden Nights Programme, Slamdance, won Best Short at the 2021 AMAAs (Africa’s biggest film awards) and was officially endorsed by both UNESCO and Survival International.
</p>

<p>
  Luke followed this up with his full-length screenplay, <em>Small Gods</em>, which expanded on <em>Meat</em>’s themes and was funded by Sovereign Films (known for <em>Triangle of Sadness</em>). It won Best Feature at the BIFA-qualifying Cornwall Film Festival, Best Director at Beijing International Film Festival, and Best Actress at the 2025 AMAAs. It is set for a cinema release this year.
</p>

<p>
  His writer-director debut, <em>The Love Song of J Alfred Prufrock</em>, stars <em>Titanic</em>’s Jonny Phillips and is currently being submitted to festivals. His latest screenplay, <em>Prisoners of Air</em>, was shortlisted for the Kinolime Feature Screenplay Competition out of 2,500 entries. His fiction has been published by literary magazines such as <em>Ink, Sweat and Tears</em>, <em>Buoy Press</em> and <em>Firewords</em>. He also writes essays online under the search-optimisable but pretentious pseudonym, <em>Eubulus Kane</em>. Browse at will!
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
            <a href="mailto:reillyluke51@gmail.com">reillyluke51@gmail.com</a>
          </div>

          <div className="contact-block">
            <h2>Instagram</h2>
            <a
              href="https://www.instagram.com/eubulus_kane/reels/"
              target="_blank"
              rel="noreferrer"
            >
              @eubulus_kane
            </a>
          </div>

          

        </motion.div>
      </div>

      <div className="contact-form-section">
        <div className="contact-form-wrapper">
          <ContactForm />

          <img
          className="contact-marginalia contact-marginalia-form"
          src="/images/margi4.png"
          alt=""
          aria-hidden="true"
        />
        </div>

        <div className="contact-form-images">
          <div className="contact-form-imageBlock">
            <img src="/images/manchester3.jpeg" alt="At the Manchester Film Festival" />
            <p>At the Manchester Film Festival</p>
          </div>

          <div className="contact-form-imageBlock">
            <img src="/images/amaa-performance.jpeg" alt="AMAA performance" />
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
        <div className="contact-bottom-imageBlock contact-bottom-imageBlock-wide">
          <img src="/images/manchester2.jpeg" alt="Giving a Q and A at the Manchester Film Festival" />
          <p>Giving a Q &amp; A at the Manchester Film Festival</p>
        </div>

        <div className="contact-bottom-imageBlock">
          <img src="/images/sgl.jpeg" alt="Small Gods' London premiere at the British Urban Fillm Awards, Genesis cinema" />
          <p>Small Gods' London premiere at the British Urban Fillm Awards, Genesis cinema</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;