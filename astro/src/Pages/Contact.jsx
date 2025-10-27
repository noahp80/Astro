import "./Contact.css";

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-form-section">
          <h1>Contact Astro</h1>
          <p className="contact-info">
            Have feedback or questions about this portfolio project? Feel free
            to reach out using the form below. This is a demo form and does not
            send real messages.
          </p>

          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-details">
          <h2>Astro HQ</h2>
          <p>Berliner Str 123</p>
          <p>Berlin</p>

          <div className="contact-item">
            <strong>Email:</strong> sprt@astro.dev
          </div>
          <div className="contact-item">
            <strong>Phone:</strong> +123456789
          </div>
          <div className="contact-item">
            <strong>Business Hours:</strong>
            <br />
            Mon–Fri: 9am – 6pm
            <br />
            Sat–Sun: Closed
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
