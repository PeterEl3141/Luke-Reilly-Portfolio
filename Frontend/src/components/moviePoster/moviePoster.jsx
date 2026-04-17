import "./moviePoster.css";
import DoodleButton from "../DoodleButton/DoodleButton.jsx";
import SquiggleButton from "../SquiggleButton/SquiggleButton.jsx";

const MoviePoster = ({
  title,
  subheading,
  image,
  link,
  buttonText = "View",
  accolades = [],
}) => {
  return (
    <article className="movie-poster">
      <img src={image} alt={title} className="movie-poster-image" />

      <div className="movie-poster-overlay">
        <div className="movie-poster-titleBlock">
          <h2 className="movie-poster-title">{title}</h2>
          <p className="movie-poster-subheading">{subheading}</p>
        </div>

        {accolades.length > 0 && (
          <div className="movie-poster-accolades">
            {accolades.map((accolade) => (
              <div key={accolade.id} className="movie-poster-accolade">
                <img
                  src={accolade.image}
                  alt={accolade.alt}
                  className="movie-poster-accolade-image"
                />
                {accolade.label && (
                  <p className="movie-poster-accolade-label">
                    {accolade.label}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        <SquiggleButton to={link} className="movie-poster-button">
          {buttonText}
        </SquiggleButton>
      </div>
    </article>
  );
};

/*<DoodleButton to={link} className="movie-poster-button">
  {buttonText}
</DoodleButton>
*/
export default MoviePoster;