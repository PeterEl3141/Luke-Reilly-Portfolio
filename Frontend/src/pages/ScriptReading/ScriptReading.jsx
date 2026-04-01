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
          <p className="script-reading-kicker">Script Reading</p>

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
        </div>

        <div className="script-reading-imageWrap">
          <img
            src='/images/headshot.png'
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

      <motion.div
        className="script-reading-testimonial"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
      >
        <blockquote>
          “Luke’s feedback was rigorous, generous, and incredibly precise. He
          helped me understand not just what wasn’t working, but why.”
        </blockquote>
        <p>— Writer / Director</p>
      </motion.div>
    </section>
  );
};

export default ScriptReading;