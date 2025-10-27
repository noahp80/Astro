import { useNavigate } from "react-router-dom";
import "./GameCardMini.css";

const GameCardMini = ({ game }) => {
  const navigate = useNavigate();

  return (
    <div className="game-card-mini-container">
      <div
        className="game-card-mini"
        onClick={() => navigate(`/game/${game.slug}`)}>
        <div className="image-wrapper">
          <div
            className="game-image"
            style={{ backgroundImage: `url(${game.background_image})` }}
          />
        </div>
      </div>
      <div className="game-card-title">{game.name}</div>
    </div>
  );
};

export default GameCardMini;
