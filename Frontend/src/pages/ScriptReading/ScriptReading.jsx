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
      I offer detailed script feedback for writers and directors working
      on short films, features, treatments, and early-stage ideas.
      Whether you need structural notes, thematic guidance, or a sharper
      sense of what the piece is doing, the aim is always to help the
      work become more precise, compelling, and alive.
    </p>

    <DoodleButton to="/contact" className="script-reading-button">
      Enquire
    </DoodleButton>

    <div className="script-reading-lowerMarginalia">
  <img
    src="/images/mh1.png"
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
            You send the script, treatment, or draft material, along with a
            short note about where the project is at and what kind of feedback
            would be most useful.
          </p>
          <p>
            I then respond with a written set of notes focused on both the
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
    <blockquote>
      "Luke provided the kind of feedback you can only get from someone who’s a talented screenwriter themselves. It can often seem like readers aren’t meeting you at your level, and don’t truly make the effort to understand your material - but that was far from my experience here. Luke doesn’t just try to transform your work, but has made the painstaking effort to consider it from as many angles as possible, in the hopes of getting you closer to something you’re happy with. This industry direly needs more talented artists like Luke doing this work!"
    </blockquote>
    <p>Alex Fernandes, Script Consultant, Producer, Screenwriter</p>
  </motion.div>

  <div className="script-reading-testimonialSketch">
    <img src="/images/sketch1.png" alt="" />
  </div>
</div>
    </section>
  );
};

export default ScriptReading;