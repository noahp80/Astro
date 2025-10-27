import React from "react";
import { useNavigate } from "react-router-dom";
import "./GameCard.css";

const GameCard = ({ game }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/games/${game.id}`);
  };

  return (
    <div className="game-card" onClick={handleClick}>
      <img src={game.image} alt={game.title} />
      <div className="game-title">{game.title}</div>
    </div>
  );
};

export default GameCard;
