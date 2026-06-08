import { Link } from "react-router-dom";
import "./error404.css";

export function Error404() {
  return (
    <div className="error-container">
      <h1>Erreur 404</h1>
      <p>Oups ! Cette page n'existe pas...</p>
      <Link to="/dashboard" className="back-button">
        Revenir sur la page d'accueil
      </Link>
    </div>
  );
}
