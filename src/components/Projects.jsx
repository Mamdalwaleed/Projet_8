function Projects() {
  return (
    <section className="projects">
      <h2>Mes projets</h2>

      <div className="projects-container">
        <div className="project-card">
          <h3>Projet 1</h3>
          <p>
            Application web développée avec React permettant de gérer des
            tâches.
          </p>
          <a href="#">Voir le code</a>
        </div>

        <div className="project-card">
          <h3>Projet 2</h3>
          <p>Site vitrine responsive réalisé avec HTML, CSS et JavaScript.</p>
          <a href="#">Voir le code</a>
        </div>

        <div className="project-card">
          <h3>Projet 3</h3>
          <p>Application interactive avec gestion d’état en React.</p>
          <a href="#">Voir le code</a>
        </div>
      </div>
    </section>
  );
}

export default Projects;
