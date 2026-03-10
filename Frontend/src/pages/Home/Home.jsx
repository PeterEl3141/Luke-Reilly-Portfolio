import "./Home.css";
import { Link } from "react-router-dom";
// Placeholder portrait for today
import portrait from "../../assets/portrait-placeholder.png";

const Home = () => {
  return (
    <section className="home">
      <div className="home-inner">
        <div className="home-titleRow" aria-hidden="true">
          <div className="home-L">L</div>
          <h1 className="home-name">UKE REILLY</h1>
        </div>

        {/* Portrait */}
        <div className="home-portrait">
          <img src={portrait} alt="Luke Reilly portrait" />
        </div>

        {/* Intro */}
        <div className="home-intro">
          <p className="home-role">Writer // Director · London</p>
          <div className="home-blurb">
          <p>
          Luke Reilly, a screenwriter, director and published short story writer who's co-directed 
          short film debut, Meat, was produced by Scala Productions and shot in Uganda. It was selected for the César Académie’s ‘Golden Nights’ Programme, Slamdance and won best short at the 2021 AMAAs (Africa’s biggest film awards). It was officially endorsed by UNESCO and Survival International.
          </p>
          <Link to="/contact" className="home-readMore">Read more</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
