import { useState } from "react";
import { GameForm } from "../../Components/GameForm/GameForm";
import { GameCard } from "../../Components/GameCard/GameCard";

import "./dashboard.css";

export function Dashboard() {
  const [isAddGame, setIsAddGame] = useState(false);

  const [gamesList, setGamesList] = useState([]);

  const [gameToEdit, setGameToEdit] = useState(null);

  const toggleAddGame = () => {
    setIsAddGame(!isAddGame);
    if (isAddGame) {
      setGameToEdit(null);
    }
  };

  const handleAddGameToList = (newGame) => {
    if (newGame.id) {
      setGamesList(
        gamesList.map((game) => (game.id === newGame.id ? newGame : game)),
      );
    } else {
      setGamesList([...gamesList, { ...newGame, id: Date.now() }]);
    }
  };

  const handleDeleteGame = (gameId) => {
    setGamesList(gamesList.filter((game) => game.id !== gameId));
  };

  const handleEditGame = (game) => {
    setGameToEdit(game);
    setIsAddGame(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
          gameToEdit={gameToEdit}
        />
      )}
      <section className="games-list">
        {gamesList.length === 0 && !isAddGame ? (
          <p className="empty-list">
            Votre bibliothèque est vide. Ajoutez votre premier jeu !
          </p>
        ) : (
          gamesList.map((game) => (
            <GameCard
              key={game.id}
              game={game}
              onDelete={handleDeleteGame}
              onEdit={handleEditGame}
            />
          ))
        )}
      </section>
    </div>
  );
}
