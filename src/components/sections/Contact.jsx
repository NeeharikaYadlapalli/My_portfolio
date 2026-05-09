import React from 'react';
import '../../styles/components/contact.css';

const SOCIALS = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/neeharika-yadlapalli-459474265/' }
];

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <span className="section-header-num">05 / Get in Touch</span>
        </div>

        <h2 className="section-title">Contact</h2>

        <div className="contact-card glass-flat">
          <p className="contact-intro">
            Open to <em>AI/ML engineering</em> roles, agentic-systems work, and research
            collaboration. Email is the fastest way to reach me &mdash; I respond within
            a day.
          </p>

          <div className="contact-list">
            <div className="contact-row">
              <span className="contact-label">Email</span>
              <a href="mailto:neeharika.yadlapalli@gmail.com" className="contact-value">
                neeharika.yadlapalli@gmail.com
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Phone</span>
              <a href="tel:+918247485839" className="contact-value">
                +91 8247485839
              </a>
            </div>
            <div className="contact-row">
              <span className="contact-label">Based in</span>
              <span className="contact-value contact-value-plain">Guntur, India</span>
            </div>
          </div>

          <div className="contact-socials">
            {SOCIALS.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
              >
                {social.label} <span className="arrow">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
