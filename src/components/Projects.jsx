function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Mes projets</h2>

      <div className="projects-container">
        {/* PROJET 5 */}
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Projet React" />

          <h3>Kasa - Application React</h3>

          <p>
            Développement d’une application de location immobilière avec React,
            React Router et composants réutilisables.
          </p>

          <div className="techs">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
          </div>

          <a href="#">Voir le projet</a>
        </div>

        {/* PROJET 6 */}
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Projet Backend" />

          <h3>Mon Vieux Grimoire - API Back-End</h3>

          <p>
            Développement d’une API REST sécurisée avec Node.js, Express et
            MongoDB. Gestion CRUD complète et authentification utilisateur.
          </p>

          <div className="techs">
            <span>Node.js</span>
            <span>Express</span>
            <span>MongoDB</span>
            <span>JWT</span>
          </div>

          <a href="#">Voir le projet</a>
        </div>

        {/* PROJET 8 */}
        <div className="project-card">
          <img src="https://via.placeholder.com/400x200" alt="Portfolio" />

          <h3>Portfolio Développeur Web</h3>

          <p>
            Création et déploiement d’un portfolio responsive moderne avec React
            et design UI personnalisé.
          </p>

          <div className="techs">
            <span>React</span>
            <span>CSS</span>
            <span>Responsive</span>
          </div>

          <a href="#">Voir le projet</a>
        </div>
      </div>

      {/* PARCOURS OPENCLASSROOMS */}

      <div className="oc-projects">
        <h2>Parcours OpenClassrooms</h2>

        <ul>
          <li>Projet 1 — Démarrer votre formation de développeur web</li>
          <li>Projet 2 — Créer la page d’accueil d’une agence de voyage</li>
          <li>Projet 3 — Créer une page web dynamique avec JavaScript</li>
          <li>Projet 4 — Débuguer et optimiser un site de photographe</li>
          <li>Projet 5 — Développer une application React</li>
          <li>
            Projet 6 — Développer le back-end d’un site de notation de livres
          </li>
          <li>Projet 7 — Planifier le développement d’un site client</li>
          <li>Projet 8 — Créer et publier un portfolio développeur</li>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
