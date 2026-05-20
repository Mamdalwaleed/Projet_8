function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Développeur Web Full-Stack Junior</p>

        <h1>Je développe des applications web modernes et performantes.</h1>

        <p className="hero-description">
          Front-end avec React, back-end avec Node.js et création d’expériences
          utilisateurs modernes et responsive.
        </p>

        <div className="hero-buttons">
          <a href="#projects">
            <button>Voir mes projets</button>
          </a>

          <a href="#contact">
            <button className="secondary-btn">Me contacter</button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
