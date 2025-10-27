import { useParams } from "react-router-dom";

const GamePage = () => {
  const { id } = useParams();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Game ID: {id}</h1>
      <p>This is the game detail page.</p>
    </div>
  );
};

export default GamePage;
