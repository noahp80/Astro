import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MainCarousel.css";
import UnchartedImg from "../img/Uncharted.jpg";
import GOWImg from "../img/GOW.jpg";
import HFW from "../img/HFW.jpeg";
import DS from "../img/DS.jpg";
import SM from "../img/SM.jpg";

const featuredGames = [
  {
    id: 1,
    image: HFW,
    slug: "horizon-zero-dawn-2",
    title: "Horizon Forbidden West",
    description:
      "Explore a majestic post-apocalyptic world filled with awe-inspiring machines.",
  },
  {
    id: 2,
    image: GOWImg,
    slug: "god-of-war-2",
    title: "God of War",
    description:
      "Embark on a mythological journey with Kratos and Atreus in the Norse realms.",
  },
  {
    id: 3,
    image: DS,
    slug: "death-stranding",
    title: "Death Stranding",
    description:
      "A genre-defying experience connecting life and death in a fractured world.",
  },
  {
    id: 4,
    image: UnchartedImg,
    slug: "uncharted-4-a-thiefs-end",
    title: "Uncharted 4: A Thief’s End",
    description:
      "Join Nathan Drake in a globe-trotting adventure for lost pirate treasure.",
  },
  {
    id: 5,
    image: SM,
    slug: "marvels-spider-man",
    title: "Marvel's Spider-Man",
    description:
      "Swing through NYC and fight crime in this thrilling superhero epic.",
  },
];

const MainCarousel = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    fade: false,
    arrows: true,
  };

  return (
    <div className="main-carousel">
      <Slider {...settings}>
        {featuredGames.map((game) => (
          <div
            key={game.id}
            className="carousel-slide"
            onClick={() => navigate(`/game/${game.slug}`)}>
            <img src={game.image} alt={game.title} className="carousel-image" />
            <div className="carousel-overlay" />
            <div className="carousel-info">
              <h2 className="carousel-title">{game.title}</h2>
              <p className="carousel-description">{game.description}</p>
              <div className="carousel-buttons">
                <button
                  className="carousel-btn buy"
                  onClick={(e) => {
                    e.stopPropagation();
                    alert("Buy mock functionality");
                  }}>
                  Buy Now
                </button>
                <button
                  className="carousel-btn details"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/game/${game.slug}`);
                  }}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainCarousel;
