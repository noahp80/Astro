import { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import GameCardMini from "./GameCardMini";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./GenreCarousel.css";

const GenreCarousel = ({ genre, title }) => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const res = await axios.get(`https://api.rawg.io/api/games`, {
          params: {
            key: import.meta.env.VITE_RAWG_API_KEY,
            genres: genre,
            platforms: 18,
            ordering: "-rating",
            page_size: 12,
          },
        });
        setGames(res.data.results);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGames();
  }, [genre]);

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="genre-carousel-container">
      <h3>{title}</h3>
      <Slider {...settings}>
        {games
          .filter((game) => game.rating >= 4)
          .map((game) => (
            <GameCardMini key={game.id} game={game} />
          ))}
      </Slider>
    </div>
  );
};

export default GenreCarousel;
