import React from 'react';
import '../../styles/components/footer.css';

const FOOTER_LINKS = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/neeharika-yadlapalli-459474265/' },
  { label: 'Email', url: 'mailto:neeharika.yadlapalli@gmail.com' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <span className="footer-copyright">
            <em>&copy; {currentYear}</em> Neeharika Yadlapalli. Crafted in Guntur.
          </span>
          <div className="footer-links">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('mailto:') ? '_self' : '_blank'}
                rel={link.url.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                className="footer-link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
