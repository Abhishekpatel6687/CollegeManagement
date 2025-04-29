import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-section">
      <h1 className="contact-heading">Contact Us</h1>

      <div className="contact-container">
        <form className="contact-form">
          <h2>Send us a message</h2>
          <input type="text" placeholder="Your Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Submit</button>
        </form>

        <div className="contact-info">
          <h2>College Contact Details</h2>
          <p><strong>Babu Banarasi Das University</strong></p>
          <p>BBD City, Ayodhya Road,<br />Lucknow, Uttar Pradesh - 226 028, India</p>
          <p><strong>Phone:</strong> 0-(522)-6196222 / 2230-(522)-6196300 / 301 / 302</p>
          <p><strong>Email:</strong> info@bbdu.ac.in</p>
          <p><strong>Website:</strong> <a href="http://www.bbdu.ac.in" target="_blank" rel="noopener noreferrer">www.bbdu.ac.in</a></p>
      
          <div className="map-container">
            <iframe
              title="bbdu-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.645293509814!2d81.00122937537778!3d26.88624396235704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be2f693e3d9c3%3A0x4652825c0a6e256e!2sBabu%20Banarasi%20Das%20University!5e0!3m2!1sen!2sin!4v1714392000000!5m2!1sen!2sin"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
