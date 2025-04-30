import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have a question about admissions,
          programs, campus life, or anything else, our team is ready to help.
        </p>
      </div>

      <div className="contact-card-container">
        <div className="contact-card">
          <h2>Send us a message</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea placeholder="Your Message" rows="6" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        <div className="contact-card">
          <h2>College Contact Details</h2>
          <p><strong>Babu Banarasi Das University</strong></p>
          <p>BBD City, Ayodhya Road, Lucknow, Uttar Pradesh - 226 028, India</p>
          <p><strong>Phone:</strong> 0-(522)-6196222 / 2230-(522)-6196300 / 301 / 302</p>
          <p><strong>Email:</strong> info@bbdu.ac.in</p>
          <p><strong>Website:</strong> <a href="http://www.bbdu.ac.in" target="_blank" rel="noopener noreferrer">www.bbdu.ac.in</a></p>
          <div className="map-container">
            <iframe
              title="bbdu-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.401061264779!2d81.05718751452021!3d26.890763967509333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be209f58895a1%3A0x8328acaa3eddd4f!2sBabu+Banarasi+Das+University!5e0!3m2!1sen!2sin!4v1537788099159"
              width="100%"
              height="200"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
