import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudies.module.css';
import hotelSuperbrainImg from '../assets/images/hotelsuperbrain.png';

const CaseStudies = () => {
    return (
        <section className={`${styles.caseStudiesGallery} container`}>
            <h1 className="section-title">Case Studies</h1>
            <p className="section-subtitle">
                A closer look at my process for solving complex problems, from concept to delivery.
            </p>

            <div className={styles.galleryGrid}>
                <Link to="/case-studies/hotel-superbrain" className={styles.caseStudyCard}>
                    <img src={hotelSuperbrainImg} alt="Workflow diagram for the Hotel Superbrain project" className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <span className={styles.cardCategory}>Data & AI</span>
                        <h3 className={styles.cardTitle}>Building a Knowledge Library for an AI Startup</h3>
                        <p className={styles.cardDescription}>
                            How I sourced, processed, and structured over 2,500 records to build a foundational knowledge library for Hotel Superbrain's generative AI.
                        </p>
                        <span className={styles.cardLink}>
                            Read Case Study <i className="bi bi-arrow-right"></i>
                        </span>
                    </div>
                </Link>

                {/* You can add another card here when you have a new case study */}
                {/* 
                <a href="#" className={styles.caseStudyCard}>
                    <img src="./image/placeholder.png" alt="" className={styles.cardImage} />
                    <div className={styles.cardContent}>
                        <span className={styles.cardCategory}>Web Development</span>
                        <h3 className={styles.cardTitle}>New Project Title</h3>
                        <p className={styles.cardDescription}>A brief summary of the project goals and outcomes goes here.</p>
                        <span className={styles.cardLink}>Read Case Study <i className="bi bi-arrow-right"></i></span>
                    </div>
                </a> 
                */}

            </div>
        </section>
    );
};

export default CaseStudies;