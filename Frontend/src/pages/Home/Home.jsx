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
          <div className="home-L">L</div>
          <h1 className="home-name">UKE REILLY</h1>
        </div>

        {/*doodleburst*/}
        <DoodleBurst />

        {/* Portrait */}
        <div className="home-portrait">
          <img src={portrait} alt="Luke Reilly portrait" />
        </div>

        {/* Intro */}
        <div className="home-intro">
          <p className="home-role">Writer // Director · London</p>
          <div className="home-blurb">
          <p>
          Luke Reilly is an award-winning screenwriter and director whose short film Meat screened at Slamdance and won Best Short at the African Movie Academy Awards. His feature Small Gods and debut film The Love Song of J. Alfred Prufrock are due for release this year.
          </p>
          <Link to="/contact" className="home-readMore hand-drawn-underline">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
