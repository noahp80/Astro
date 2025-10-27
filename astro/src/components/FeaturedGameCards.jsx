import { useNavigate } from "react-router-dom";
import "./FeaturedGameCards.css";

const FeaturedGameCards = ({ games }) => {
  const navigate = useNavigate();

  return (
    <div className="featured-cards-section">
      <h2 className="featured-title">Featured PlayStation Hits</h2>
      <div className="featured-card-grid">
        {games.slice(0, 20).map((game) => (
          <div key={game.slug} className="featured-card">
            <div
              className="featured-image"
              style={{ backgroundImage: `url(${game.background_image})` }}
              title={game.name}
            />
            <div className="featured-content">
              <h3>{game.name}</h3>
              <p className="featured-description">
                {getDescription(game.slug)}
              </p>
              <button onClick={() => navigate(`/game/${game.slug}`)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const getDescription = (slug) => {
  const descriptions = {
    "astrobot-2024":
      "A charming platformer showcasing the PS5's power and haptics.",
    "horizon-zero-dawn":
      "A post-apocalyptic adventure starring Aloy in a machine-dominated world.",
    "horizon-forbidden-west":
      "The saga continues with breathtaking environments and thrilling combat.",
    "god-of-war-2018":
      "Kratos returns with Norse mythology and a deeply personal journey.",
    "god-of-war-ragnarok":
      "An epic conclusion to the Norse saga with cinematic intensity.",
    "ghost-of-tsushima":
      "Fight to free Tsushima with stunning visuals and samurai action.",
    "death-stranding":
      "A mysterious journey across a fractured world, connecting humanity.",
    "last-of-us-part-1":
      "A remake of the modern classic that redefined narrative gaming.",
    "last-of-us-part-2":
      "A bold and emotional sequel with brutal realism and depth.",
    "uncharted-4":
      "Nathan Drake’s final treasure-hunting adventure full of thrills.",
  };

  return (
    descriptions[slug.toLowerCase()] ||
    "A PlayStation exclusive you don't want to miss."
  );
};

export default FeaturedGameCards;
