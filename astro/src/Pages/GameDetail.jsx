import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "./GameDetail.css";

const GameDetail = () => {
  const { slug } = useParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        const res = await axios.get(`https://api.rawg.io/api/games/${slug}`, {
          params: { key: import.meta.env.VITE_RAWG_API_KEY },
        });
        setGame(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGame();
  }, [slug]);

  const getMetacriticClass = (score) => {
    if (score >= 75) return "score-high";
    if (score >= 50) return "score-medium";
    return "score-low";
  };

  if (!game) return <div className="loading">Loading...</div>;

  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  const price = "$59.99";

  return (
    <div
      className="game-detail-fullscreen"
      style={{
        backgroundImage: `url(${game.background_image})`,
      }}>
      <div className="overlay-gradient" />
      <div className="game-detail-left">
        <Link to="/" className="back-link">
          ← Back to Home
        </Link>
        <h1 className="game-title">{game.name}</h1>

        <p
          className="game-description"
          dangerouslySetInnerHTML={{ __html: game.description }}
        />

        <div className="additional-info">
          <p>
            <strong>Genres:</strong> {game.genres.map((g) => g.name).join(", ")}
          </p>
          <p>
            <strong>Platforms:</strong>{" "}
            {game.platforms.map((p) => p.platform.name).join(", ")}
          </p>
          <p>
            <strong>Developers:</strong>{" "}
            {game.developers?.map((d) => d.name).join(", ")}
          </p>
          <p>
            <strong>Publishers:</strong>{" "}
            {game.publishers?.map((p) => p.name).join(", ")}
          </p>
          <p>
            <strong>Released:</strong> {game.released}
          </p>
          <p>
            <strong>ESRB Rating:</strong>{" "}
            {game.esrb_rating?.name || "Not Rated"}
          </p>
          {game.metacritic && (
            <p>
              <strong>Metacritic:</strong>{" "}
              <span
                className={`metacritic-score ${getMetacriticClass(
                  game.metacritic,
                )}`}>
                {game.metacritic}
              </span>
            </p>
          )}
          {game.tags?.length > 0 && (
            <p>
              <strong>Tags:</strong>{" "}
              {game.tags
                .slice(0, 6)
                .map((tag) => tag.name)
                .join(", ")}
            </p>
          )}
          {game.website && (
            <p>
              <strong>Website:</strong>{" "}
              <a
                href={game.website}
                target="_blank"
                rel="noreferrer"
                className="website-link">
                {game.website}
              </a>
            </p>
          )}
        </div>

        <div className="purchase-section">
          <span className="price">{price}</span>
          <button className="buy-button">Buy Now (Mock)</button>
        </div>

        {game.short_screenshots && game.short_screenshots.length > 0 && (
          <div className="carousel-container">
            <Slider {...settings}>
              {game.short_screenshots.map((shot) => (
                <div key={shot.id} className="carousel-slide-detail">
                  <img src={shot.image} alt={`${game.name} screenshot`} />
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default GameDetail;
