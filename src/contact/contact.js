import React from "react";
import "./contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        We're here to help! If you have any questions, concerns, or feedback,
        please don't hesitate to contact us using the information below:
      </p>

      <h2>Contact Information</h2>
      <ul>
        <li>
          <strong>Customer Service Email:</strong> support@example.com
        </li>
        <li>
          <strong>Customer Service Phone:</strong> +91 9034506089
        </li>
        <li>
          <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
          (EST)
        </li>
      </ul>

      <h2>Headquarters</h2>
      <p>
        E-COMMERCE
        <br />
        123 Main Street
        <br />
        Namakkal, Tamilnadu, 637212
        <br />
        India
      </p>

      <h2>Send Us a Message</h2>
      <form>
        <div>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
