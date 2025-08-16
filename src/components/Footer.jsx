import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>MySite</h4>
          <p style={styles.text}>© {new Date().getFullYear()} MySite, Inc.</p>
        </div>

        <div style={styles.column}>
          <h5 style={styles.subheading}>Company</h5>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/imoveis" style={styles.link}>Imóveis</Link>
          <Link to="/historia" style={styles.link}>História</Link>
        </div>

        <div style={styles.column}>
          <h5 style={styles.subheading}>Resources</h5>
          <a href="/docs" style={styles.link}>Documentation</a>
          <a href="/support" style={styles.link}>Support</a>
          <a href="/contact" style={styles.link}>Contact</a>
        </div>

        <div style={styles.column}>
          <h5 style={styles.subheading}>Follow Us</h5>
          <div style={styles.socialIcons}>
            <a href="https://twitter.com" style={styles.icon}>🐦</a>
            <a href="https://linkedin.com" style={styles.icon}>🔗</a>
            <a href="https://github.com" style={styles.icon}>💻</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#eee",
    padding: "40px 20px",
    fontSize: "14px",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    maxWidth: "1200px",
    margin: "0 auto",
    gap: "20px",
  },
  column: {
    flex: "1 1 200px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  heading: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "#fff",
  },
  subheading: {
    fontSize: "16px",
    marginBottom: "4px",
    color: "#aaa",
  },
  text: {
    color: "#bbb",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    transition: "color 0.2s",
  },
  socialIcons: {
    display: "flex",
    gap: "12px",
    marginTop: "4px",
  },
  icon: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "18px",
    transition: "color 0.2s",
  },
};

export default Footer;
