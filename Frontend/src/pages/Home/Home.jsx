import "./Home.css";
import { Link } from "react-router-dom";
// Placeholder portrait for today
import portrait from "../../assets/portrait-placeholder.png";
import DoodleBurst from "../../components/DoodleBurst/DoodleBurst.jsx";

const Home = () => {
  return (
    <section className="home">
      <div className="home-inner">
      <div className="home-titleRow" aria-hidden="true">
        <div className="home-nameWrap">
          <h1 className="home-name">Luke Reilly</h1>
          <img
            className="home-nameUnderline"
            src="/images/underline.png"
            alt=""
          />
        </div>
      </div>

        {/* Portrait */}
      <div className="home-portrait">
        <DoodleBurst />
        <img src={portrait} alt="Luke Reilly portrait" />
      </div>

        {/* Intro */}
        <div className="home-intro">
          <p className="home-role">Writer // Director</p>
          <div className="home-blurb">
          <p>
          Luke Reilly is an award-winning screenwriter and director who has been creating work which is satirical, darkly humorous, haunting and heartfelt for over half a decade. His films, scripts and short stories have spanned subjects as diverse as cultural tourism, poverty, existential poetry and period horror.
          </p>
          <Link to="/contact" className="home-readMore hand-drawn-underline">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
