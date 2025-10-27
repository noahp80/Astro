import Slider from "react-slick";
import GameCardMini from "./GameCardMini";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ManualCarousel.css";

const ManualCarousel = ({ games, title }) => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: true,
    responsive: [
      { breakpoint: 1600, settings: { slidesToShow: 5 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  return (
    <div className="genre-carousel-container">
      <h3>{title}</h3>
      <Slider {...settings}>
        {games.map((game) => (
          <GameCardMini key={game.id} game={game} />
        ))}
      </Slider>
    </div>
  );
};

export default ManualCarousel;
