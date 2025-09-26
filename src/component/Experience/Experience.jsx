import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Experience.module.css';
import { experienceData } from '../../data';

const Experience = () => {
  return (
    <section id="experience" className={`${styles.timelineSection} container`}>
      <h2 className="section-title">My Journey</h2>
      <div className={styles.timelineContainer}>
        {experienceData.map((item, index) => (
          <div key={index} className={styles.timelineBlock}>
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
              <h3>{item.title}</h3>
              <span className={styles.timelineDate}>{item.date}</span>
              {Array.isArray(item.description) ? (
                <ul>
                  {item.description.map((point, i) => <li key={i}>{point}</li>)}
                </ul>
              ) : (
                <p>{item.description}</p>
              )}
              {item.caseStudyLink && (
                <Link to={item.caseStudyLink} className={styles.btnCase}>Case Study</Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;