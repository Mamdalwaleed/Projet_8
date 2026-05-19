function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-subtitle">Développeur Front-End</p>

        <h1>
          Bonjour, je suis <span>Waleed</span>
        </h1>

        <p className="hero-description">
          Je crée des interfaces web modernes, responsives et accessibles avec
          React et JavaScript.
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
