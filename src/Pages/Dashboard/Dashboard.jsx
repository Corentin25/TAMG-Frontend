import { useState } from "react";
import { GameForm } from "../../Components/GameForm/GameForm";
import "./dashboard.css";

export function Dashboard() {
  const [isAddGame, setIsAddGame] = useState(false);

  const toggleAddGame = () => {
    setIsAddGame(!isAddGame);
  };
  return (
    <div className="addGameContainer">
      <button
        className={!isAddGame ? "addGameButton" : "cancelAddGame"}
        aria-label={!isAddGame ? "Ajouter un jeu" : "Annuler l'ajout"}
        onClick={toggleAddGame}
      >
        {!isAddGame ? "+ Ajouter un jeu" : "Annuler"}
      </button>
      {isAddGame && <GameForm toggleAddGame={toggleAddGame} />}
    </div>
  );
}
