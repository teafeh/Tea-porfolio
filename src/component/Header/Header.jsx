import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../assets/images/Group 5.svg';
import resumePDF from '../../assets/documents/Tea Web Developer & UIUX Designer  Remote 2023 – Present.pdf';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    // Smooth scroll for hash links, direct navigation for others
    // This is a simple implementation. For complex layouts, a library might be better.
    setTimeout(() => {
        setMenuOpen(false);
    }, 150);
  };

  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} container`}>
        <Link to="/" className={styles.navLogo} onClick={handleLinkClick}>
          <img src={logo} alt="TechDevTea Logo" />
        </Link>
        <ul className={`${styles.navMenu} ${menuOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <a href="/#home" className={styles.navLink} onClick={handleLinkClick}>Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#portfolio" className={styles.navLink} onClick={handleLinkClick}>Portfolio</a>
          </li>
          <li className={styles.navItem}>
            <NavLink 
              to="/case-studies" 
              className={({isActive}) => `${styles.navLink} ${isActive ? styles.activeLink : ''}`} 
              onClick={handleLinkClick}
            >
              Case Studies
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <a href="/#experience" className={styles.navLink} onClick={handleLinkClick}>Experience</a>
          </li>
          <li className={styles.navItem}>
            <a href="/#contact" className={styles.navLink} onClick={handleLinkClick}>Contact</a>
          </li>
          <li className={styles.navItem}>
            <a href={resumePDF} download="Boluwatife-Oladele-Resume.pdf" className={`${styles.navLink} ${styles.btnResume}`}>
              Resume
            </a>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <i className="bi bi-list"></i>
          <i className="bi bi-x"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;