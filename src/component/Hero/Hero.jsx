import React from 'react';
import styles from './Hero.module.css';
import { heroData } from '../../data';

const Hero = () => {
  return (
    <section id="home" className={`${styles.hero} container`}>
      <div className={styles.heroText}>
        <p className={styles.heroIntro}>Hello, I am</p>
        <h1 className={styles.heroName}>{heroData.name}</h1>
        <h2 className={styles.heroTagline}>{heroData.tagline}</h2>
        <p className={styles.heroBio}>{heroData.bio}</p>
        <div className={styles.heroSocials}>
          {heroData.socials.filter(s => s.name !== 'github').map(social => (
            <a key={social.name} href={social.url} aria-label={social.name} target="_blank" rel="noopener noreferrer">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
        <a href="#contact" className="btn btn-primary">Get In Touch</a>
      </div>
      <div className={styles.heroImage}>
        <img src={heroData.profileImage} alt="Boluwatife Oladele" className={styles.profilePic} />
      </div>
    </section>
  );
};

export default Hero;