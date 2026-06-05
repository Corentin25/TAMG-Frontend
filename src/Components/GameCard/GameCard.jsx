import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

import "./gameCard.css";

export function GameCard({ game, onEdit, onDelete }) {
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(
      `Êtes-vous sûr de vouloir supprimer le jeu "${game.gameName}" ?`,
    );
    if (confirmDelete) {
      onDelete(game.id);
    }
  };

  return (
    <article className="game-card">
      <div className="image-container">
        {game.imagePreview ? (
          <img
            src={game.imagePreview}
            alt={`Pochette de ${game.gameName}`}
            className="game-image"
          />
        ) : (
          <div className="empty-image">Aucune image</div>
        )}
      </div>
      <div className="game-info">
        <h2 className="game-title">{game.gameName}</h2>
        <div className="game-meta">
          <span className="game-platform">{game.plateform}</span>
          {game.date && (
            <span className="game-date">Commencé le {game.date}</span>
          )}
          {game.hours && <span>|</span>}
          {game.hours && (
            <span className="game-hours">{game.hours} heures</span>
          )}
        </div>
        <span className={`status-badge ${game.status}`}>
          {game.status === "todo" && "À faire"}
          {game.status === "inprogress" && "En cours"}
          {game.status === "finished" && "Terminé"}
          {game.status === "giveup" && "Abandonné"}
        </span>
        <p className="game-comment">{game.comments}</p>
      </div>
      <div className="note-group">
        <span className="game-note">{game.note}/20</span>
        <div className="icons">
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="edit-icon"
            onClick={() => onEdit(game)}
          />
          <FontAwesomeIcon
            icon={faTrashCan}
            className="delete-icon"
            onClick={handleDeleteClick}
          />
        </div>
      </div>
    </article>
  );
}
