import "./ScriptReading.css";
import { motion } from "framer-motion";
import portrait from "../../assets/portrait-placeholder.png";
import DoodleButton from "../../components/DoodleButton/DoodleButton";

const ScriptReading = () => {
  return (
    <section className="script-reading-page">
      <motion.div
  className="script-reading-hero"
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
>
  <div className="script-reading-text">
  <div className="script-reading-headingRow">
  <p className="script-reading-kicker">Script Reading</p>

  <div className="script-reading-marginalia">
    <img
      src="/images/mv4.png"
      alt=""
      className="script-reading-marginalia-image"
    />
  </div>
</div>

<h1 className="script-reading-subheading">
  Thoughtful feedback for screenwriters, filmmakers, and works in
  progress.
</h1>

    <p className="script-reading-intro">
      I offer detailed script feedback for writers working
      on short films and features.
      Whether you need structural notes, thematic guidance, or a sharper
      sense of what the piece is doing, the aim is always to help the
      work become more precise, compelling, and alive.
    </p>

    <DoodleButton to="/contact" className="script-reading-button">
      Enquire
    </DoodleButton>

    <div className="script-reading-lowerMarginalia">
  <img
    src="/images/margiv.png"
    alt=""
    className="script-reading-lowerMarginalia-image"
  />
</div>
  </div>



  <div className="script-reading-imageWrap">
    <img
      src="/images/headshot.jpg"
      alt="Luke Reilly"
      className="script-reading-image"
    />
  </div>
</motion.div>

      <motion.div
        className="script-reading-details"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="script-reading-column">
          <h2>What I can help with:</h2>
          <ul>
            <li>Structure and pacing</li>
            <li>Character clarity and motivation</li>
            <li>Tone, voice, and thematic consistency</li>
            <li>Dialogue and scene construction</li>
            <li>Development notes for early drafts</li>
            <li>Feedback on treatments and outlines</li>
          </ul>
        </div>

        <div className="script-reading-column">
          <h2>How it works</h2>
          <p>
            You send the script along with a
            short note about what kind of feedback
            would be most useful. 
          </p>
          <p>
            We will schedule a thirty minute call and a chat. I will then go away and respond with a written set of notes focused on both the
            larger structural picture and the finer details of the writing.
          </p>
          <p>
            Turnaround and format can be tailored depending on the project.
          </p>
        </div>
      </motion.div>

      <div className="script-reading-testimonialRow">
      <motion.div
  className="script-reading-testimonial"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
>
  <div className="script-reading-testimonialHeader">
    <p>Testimonials</p>
    <h2>What Writers Say</h2>
  </div>

  <div className="script-reading-testimonialColumns">
    <div className="script-reading-testimonialColumn">
      <div className="script-reading-testimonialItem">
        <blockquote>
          "Luke provided the kind of feedback you can only get from someone who’s a talented screenwriter themselves. It can often seem like readers aren’t meeting you at your level, and don’t truly make the effort to understand your material - but that was far from my experience here. Luke doesn’t just try to transform your work, but has made the painstaking effort to consider it from as many angles as possible, in the hopes of getting you closer to something you’re happy with. This industry direly needs more talented artists like Luke doing this work!"
        </blockquote>
        <p>Alex Fernandes, Script Consultant, Producer, Screenwriter</p>
      </div>
    </div>

    <div className="script-reading-testimonialColumn">
      <div className="script-reading-testimonialItem">
        <blockquote>
          “Luke Reilly has provided valuable feedback for my writing which improved my work across a variety of mediums. As an award-nominated screenwriter, his opinion is trustworthy and his industry insight is important for those aiming to make the next steps in their professional creative practice. I highly recommend this service.”
        </blockquote>
        <p>Harper Walton, Author of <em>Midnight Movies</em></p>
      </div>
    </div>

    <div className="script-reading-testimonialColumn">
      <div className="script-reading-testimonialItem">
        <blockquote>
          "Luke gives insightful, detailed feedback on creative work. He can give broad, structural feedback as well as line edit notes that really helped me shape my work."
        </blockquote>
        <p>Beth Hurst, Poet, Writer, Graduate of MSt in Creative Writing, University of Oxford</p>
      </div>
    </div>
  </div>

  <img
    src="/images/margizig.png"
    alt=""
    aria-hidden="true"
    className="script-reading-testimonialMarginalia"
  />




<div className="script-reading-faceFan" aria-hidden="true">
  {["/images/h1.png", "/images/h2.png", "/images/h3.png"].map((src, index) => (
    <motion.img
      key={src}
      src={src}
      alt=""
      className={`script-reading-faceFanImage script-reading-faceFanImage-${index + 1}`}
      initial={{
        opacity: 0,
        rotate: -24,
        x: -28,
        y: 20,
      }}
      whileInView={{
        opacity: 0.14,
        rotate: [-24, 6 + index * 10],
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.85,
        delay: 0.25 + index * 0.18,
        ease: "easeOut",
      }}
    />
  ))}
</div>
</motion.div>

 
</div>
    </section>
  );
};

export default ScriptReading;