# THESE ARE My GAMES 🎮

Une application web Front-end permettant de gérer et de recenser sa propre bibliothèque de jeux vidéo.

Ce projet a été développé dans le cadre d'une formation d'intégrateur web. Conçue comme un prototype interactif (maquette fonctionnelle sans base de données centrale), cette application met en avant des compétences avancées en architecture React, la persistance locale des données, et l'intégration d'une API tierce pour la gestion des médias.

## 🚀 Fonctionnalités

- **Authentification (Maquette interactive) :** Simulation d'une interface de création de compte et de connexion, incluant une validation stricte des formulaires (RegEx pour la sécurité des mots de passe).
- **Persistance des données (Local Storage) :** Sauvegarde intégrale de la bibliothèque de jeux directement dans le navigateur de l'utilisateur, permettant de conserver les données d'une session à l'autre sans nécessiter de serveur back-end.
- **Hébergement d'images Cloud :** Utilisation de l'API Cloudinary (Unsigned Uploads) pour permettre le téléchargement et l'hébergement distant des pochettes de jeux directement depuis l'interface client.
- **Opérations CRUD Front-end :** Formulaire complet permettant d'ajouter, lire, modifier et supprimer des fiches de jeux (titre, plateforme, dates, heures, statut, note et illustration).
- **Interface Responsive :** Design optimisé pour un affichage fluide et ergonomique sur ordinateur, tablette et mobile.

## 🛠️ Technologies Utilisées

- **Framework :** React (initialisé avec Vite)
- **Routage :** React Router DOM (utilisation du `HashRouter` pour garantir la compatibilité des routes dynamiques avec les environnements d'hébergement statiques comme GitHub Pages).
- **Gestion d'état & Stockage :** Hooks React (`useState`, `useEffect`) et API Web native (Local Storage).
- **Hébergement Médias :** Cloudinary API
- **Style & UI :** CSS natif, FontAwesome (icônes), Google Fonts.

## 📁 Architecture Front-End

L'espace de travail React est organisé de manière modulaire afin de séparer la logique de l'interface :

- `src/Assets/` : Ressources statiques, médias et logos.
- `src/Components/` : Composants UI isolés et réutilisables (ex: Header, formulaires d'ajout, cartes de jeu).
- `src/Layout/` : Composants de mise en page encadrant les vues principales.
- `src/Pages/` : Composants principaux représentant les différentes routes de l'application (LogIn, Dashboard, Error404).

## ⚙️ Installation et Lancement en local

Prérequis : Disposer de [Node.js](https://nodejs.org/) installé sur votre machine.

1. Cloner le dépôt :

   ```bash
   git clone [https://github.com/Corentin25/These-Are-My-Games.git](https://github.com/Corentin25/These-Are-My-Games.git)
   ```

2. Naviguer vers le dossier du projet :

   ```bash
   cd These-Are-My-Games
   ```

3. Installer les dépendances du projet :

   ```bash
   npm install
   ```

4. Démarrer le serveur de développement :
   ```bash
   npm run dev
   ```

L'application sera accessible localement, généralement sur `http://localhost:5173`.

## 👨‍💻 Auteur

- **Développé par Corentin.**
