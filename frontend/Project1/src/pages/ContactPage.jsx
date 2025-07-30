import "../styles/contact.css";
import Navigation from "../components/Navigation";
const ContactPage = () => {
  return (
    <>
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">We'd love to hear from you! Get in touch with any questions or feedback.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="contact-info">
        <h2>Our Location</h2>
        <p>123 Nike Street, Sports City, India</p>
        <p>Email: support@nike.com</p>
        <p>Phone: +91 12345 67890</p>
      </div>
    </div>
    </>
  );
};

export default ContactPage;
