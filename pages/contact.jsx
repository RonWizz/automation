import React from "react";
import "../styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="common-heading">Feel Free to Contact us</h2>

      <div className="container">
        <div className="contact-form">
          <form
            action="https://formspree.io/f/myzgwwek"
            method="POST"
            className="contact-inputs"
          >
            <input
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <textarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required
            ></textarea>

            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
