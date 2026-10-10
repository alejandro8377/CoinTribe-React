import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Daniel Román. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
