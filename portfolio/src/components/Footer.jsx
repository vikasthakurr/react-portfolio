import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Vikas Kumar</span>
        <span className="footer-muted">Built for LPU</span>
      </div>
    </footer>
  );
};

export default Footer;
