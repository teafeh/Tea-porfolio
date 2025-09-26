import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CaseStudyDetail.module.css';
import workflowImg from '../assets/images/hotelsuperbrain.png';
import dataShotImg from '../assets/images/hotelSuperBrainDataShot.png';

const CaseStudyDetail = () => {
  return (
    <div className={styles.notepadContainer}>
        <div className={styles.notepad}>
            <div className={styles.notepadHeader}>
                <Link to="/" className={styles.closeBtn} aria-label="Close and return to homepage">×</Link>
            </div>
            
            <div className={styles.notepadContent}>
                <h1>Case Study: Building a Knowledge Library for Hotel Superbrain's AI</h1>
                
                <ul className={styles.projectMeta}>
                    <li><strong>Client:</strong> Hotel Superbrain (USA-Based AI Startup)</li>
                    <li><strong>Role:</strong> Freelance Data Specialist</li>
                    <li><strong>Timeline:</strong> June, 2025 (15-Day Contract)</li>
                    <li><strong>Tools:</strong> Google Search, ChatGPT, Google Sheets</li>
                </ul>

                <h2>The Goal</h2>
                <p>Hotel Superbrain needed to build a foundational knowledge library for its generative AI. My task was to execute targeted research queries, gather relevant documents (PDFs), and transform the unstructured information into a clean, organized dataset of over 2,500 records that the AI could learn from.</p>

                <figure className={styles.caseStudyImage}>
                    <img src={workflowImg} alt="Workflow diagram showing the process from query to data handoff" />
                    <figcaption>The systematic process for converting raw information into a high-quality, structured dataset.</figcaption>
                </figure>

                <h2>My Contribution: A 3-Step Workflow</h2>
                <ol className={styles.workflowList}>
                    <li>
                        <h3>Sourcing & Collection</h3>
                        <p>Based on specific query tasks, I performed advanced searches to identify and collect high-authority documents. The focus was on quality and relevance to ensure the AI was trained on expert-level information.</p>
                    </li>
                    <li>
                        <h3>AI-Assisted Extraction & Summarization</h3>
                        <p>This was the core of the process. For each document, I leveraged ChatGPT to extract key data points and synthesize complex information into concise, structured formats, dramatically increasing efficiency and consistency.</p>
                    </li>
                    <li>
                        <h3>Structuring & Handoff</h3>
                        <p>I meticulously populated the extracted data into a shared Google Sheet. A critical feature I included was a column with a direct download link for each source PDF, which optimized the data ingestion workflow for the engineering team and ensured a seamless project handoff.</p>
                    </li>
                </ol>

                <figure className={styles.caseStudyImage}>
                    <img src={dataShotImg} alt="Anonymized screenshot of the structured data in a spreadsheet" />
                    <figcaption>An anonymized look at the final dataset, structured for easy ingestion by the AI model.</figcaption>
                </figure>

                <h2>The Outcome</h2>
                <p>The final deliverable was a robust, well-organized knowledge library of over 2,500 records. This work served as a critical building block for the Hotel Superbrain AI, enhancing its reasoning capabilities and enabling the team to accelerate the development pipeline.</p>
                
                <div className={styles.clientReview}>
                    <h2>Client Feedback</h2>
                    <blockquote>
                        <p>"Your Team delivered a solid foundation for my hotel SuperBrain. I'd give it an 80%+ grade overall... The structure is thoughtful, focused on key hotel themes, and shows curation effort. Strengths like strong coverage of feasibility and operations outweigh minor issues."</p>
                        <cite>— Andrew Fritz, Hotel Superbrain</cite>
                    </blockquote>
                </div>
            </div>
        </div>
    </div>
  );
};

export default CaseStudyDetail;