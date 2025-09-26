import React, { useState } from 'react';
import styles from './Portfolio.module.css';
import { devProjects, uiuxDesigns, canvaDesigns, canvaVideos } from '../../data';

// A reusable Project Card component
const ProjectCard = ({ project }) => {
  const [isActive, setIsActive] = useState(false);

  // This handles the tap-to-reveal on mobile
  const handleCardClick = (e) => {
    // If a link inside the card was clicked, let it navigate
    if (e.target.closest('a')) {
      return;
    }
    // For touch devices, toggle the active state
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsActive(prev => !prev);
    }
  };

  const isVideo = project.video;

  return (
    <div
      className={`${styles.projectCard} ${isVideo ? styles.videoCard : ''} ${isActive ? styles.mobileActive : ''}`}
      onClick={handleCardClick}
      onMouseLeave={() => setIsActive(false)} // Close on mouse leave on desktop
    >
      {isVideo ? (
        <video autoPlay muted loop playsInline className={styles.videoPreview}>
          <source src={project.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img src={project.image} alt={`${project.title} screenshot`} />
      )}

      <div className={styles.cardOverlay}>
        <h4>{project.title}</h4>
        <p>{project.description}</p>
        <div className={styles.techStack}>
          {project.tech.map(t => <span key={t}>{t}</span>)}
        </div>
        <div className={styles.projectLinks}>
          {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" title="Live Demo"><i className="bi bi-link-45deg"></i></a>}
          {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repo"><i className="bi bi-github"></i></a>}
          {project.figmaUrl && <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" title="View on Figma"><i className="bi bi-file-earmark-text"></i></a>}
          {project.canvaUrl && (
            isVideo ? <a href={project.canvaUrl} target="_blank" rel="noopener noreferrer" title="View on Canva"><i className="bi bi-play-circle-fill"></i></a>
            : <a href={project.canvaUrl} target="_blank" rel="noopener noreferrer" title="View on Canva"><i className="bi bi-file-earmark-text"></i></a>
          )}
        </div>
      </div>
    </div>
  );
};


const Portfolio = () => {
  return (
    <section id="portfolio" className={`${styles.portfolioSection} container`}>
      <h2 className="section-title">Portfolio</h2>
      <p className="section-subtitle">A selection of my recent projects and designs.</p>

      <h3 className={styles.portfolioSubheading}>Development Projects</h3>
      <div className={styles.portfolioGrid}>
        {devProjects.map((p, i) => <ProjectCard key={`dev-${i}`} project={p} />)}
      </div>

      <h3 className={styles.portfolioSubheading}>UI/UX Designs</h3>
      <div className={styles.portfolioGrid}>
        {uiuxDesigns.map((p, i) => <ProjectCard key={`uiux-${i}`} project={p} />)}
      </div>

      <h3 className={styles.portfolioSubheading}>Canva Designs</h3>
      <div className={styles.portfolioGrid}>
        {canvaDesigns.map((p, i) => <ProjectCard key={`canva-${i}`} project={p} />)}
      </div>

      <div className={styles.canvaVideoSection}>
        <h3 className={styles.portfolioSubheading}>Canva Video Edits</h3>
        <div className={styles.portfolioGrid}>
          {canvaVideos.map((p, i) => <ProjectCard key={`video-${i}`} project={p} />)}
        </div>
      </div>
      
    </section>
  );
};

export default Portfolio;