import "./moviePoster.css";
import DoodleButton from "../DoodleButton/DoodleButton.jsx";

const MoviePoster = ({ title, subheading, image, link, buttonText = "View" }) => {
  return (
    <article className="movie-poster">
      <img src={image} alt={title} className="movie-poster-image" />

      <div className="movie-poster-overlay">
        <div className="movie-poster-titleBlock">
          <h2 className="movie-poster-title">{title}</h2>
          <p className="movie-poster-subheading">{subheading}</p>
        </div>

        <DoodleButton to={link} className="movie-poster-button">
          {buttonText}
        </DoodleButton>
      </div>
    </article>
  );
};

export default MoviePoster;