function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>

      <p>Tu peux me contacter directement via ce formulaire ou par email.</p>

      <form className="contact-form">
        <input type="text" placeholder="Votre nom" />
        <input type="email" placeholder="Votre email" />
        <textarea placeholder="Votre message"></textarea>

        <button type="submit">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
