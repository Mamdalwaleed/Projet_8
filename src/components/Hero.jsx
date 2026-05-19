function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Développeur Web Full-Stack Junior</p>

        <h1>
          Bonjour, je suis <span>Waleed</span>
        </h1>

        <p className="hero-description">
          Je développe des applications web complètes, du front-end avec React
          jusqu’au back-end avec Node.js et bases de données.
        </p>

        <div className="hero-buttons">
          <button>Voir mes projets</button>
          <button className="secondary-btn">Me contacter</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
