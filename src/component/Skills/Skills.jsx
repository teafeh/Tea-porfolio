import React from 'react';
import styles from './Skills.module.css';
import { skillsData } from '../../data';

const Skills = () => {
  return (
    <section id="skills" className={`${styles.skillsSection} container`}>
      <h2 className="section-title">My Tech Stack</h2>
      <p className="section-subtitle">Technologies & Skills I work with to bring ideas to life.</p>
      <div className={styles.skillsGrid}>
        <div className={styles.skillCategory}>
          <h3>Frontend</h3>
          <div className={styles.skillsList}>
            {skillsData.frontend.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3>Backend</h3>
          <div className={styles.skillsList}>
            {skillsData.backend.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3>Design & Tools</h3>
          <div className={styles.skillsList}>
            {skillsData.design.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </div>
        <div className={styles.skillCategory}>
          <h3>Skills</h3>
          <div className={styles.skillsList}>
            {skillsData.soft.map(skill => <span key={skill}>{skill}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;