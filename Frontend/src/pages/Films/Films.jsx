import "./Films.css";
import MoviePoster from "../../components/moviePoster/moviePoster.jsx";
import filmsData from "../../data/filmsData";

const films = [
  {
    title: "SMALL GODS",
    subheading: "2025 . 109 min",
    image: "/images/smallgods.png",
    link: "/films/film-one",
    buttonText: "View",
  },
  {
    title: "THE LOVE SONG OF J. ALFRED PRUFROCK",
    subheading: "2026 . 32 min",
    image: "/images/lojap.jpeg",
    link: "/films/film-two",
    buttonText: "View",
  },
  {
    title: "MEAT",
    subheading: "2024 . 93 min",
    image: "/images/meat.jpg",
    link: "/films/film-three",
    buttonText: "View",
  },
];

const Films = () => {
  return (
    <section className="films-page">
      {filmsData.map((film) => (
        <MoviePoster
        key={film.slug}
        title={film.title}
        subheading={film.subheading}
        image={film.image}
        link={`/films/${film.slug}`}
        buttonText="View"
      />
      ))}
    </section>
  );
};

export default Films;