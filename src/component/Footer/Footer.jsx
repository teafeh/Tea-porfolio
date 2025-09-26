import React from 'react';
import styles from './Footer.module.css';
import { heroData } from '../../data';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <p>© {new Date().getFullYear()} Boluwatife Oladele. All Rights Reserved.</p>
        <div className={styles.footerSocials}>
            {heroData.socials.filter(s => ['linkedin', 'github', 'twitter'].includes(s.name)).map(social => (
                 <a key={social.name} href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
                    <i className={social.icon}></i>
                 </a>
            ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;