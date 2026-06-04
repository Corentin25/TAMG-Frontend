import { useState } from "react";
import { GameForm } from "../../Components/GameForm/GameForm";
import { GameCard } from "../../Components/GameCard/GameCard";

import "./dashboard.css";

export function Dashboard() {
  const [isAddGame, setIsAddGame] = useState(false);

  const [gamesList, setGamesList] = useState([]);

  const toggleAddGame = () => {
    setIsAddGame(!isAddGame);
  };

  const handleAddGameToList = (newGame) => {
    setGamesList([...gamesList, newGame]);
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
      {isAddGame && (
        <GameForm
          toggleAddGame={toggleAddGame}
          addGameToList={handleAddGameToList}
        />
      )}
      <section className="games-list">
        {gamesList.length === 0 && !isAddGame ? (
          <p className="empty-list">
            Votre bibliothèque est vide. Ajoutez votre premier jeu !
          </p>
        ) : (
          gamesList.map((game, index) => <GameCard key={index} game={game} />)
        )}
      </section>
    </div>
  );
}
