import React, { useState } from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ message: '', type: '' }); // type: 'sending', 'success', 'error'

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ message: "Sending...", type: 'sending' });

    // IMPORTANT: Replace with your actual Web3Forms Access Key
    const object = { ...formData, access_key: 'ae840849-198d-48e6-a24b-4ddc769e57db' }; 
    const json = JSON.stringify(object);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: json
      });
      const result = await res.json();

      if (result.success) {
        setStatus({ message: result.message, type: 'success' });
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        console.log("Error response:", result);
        setStatus({ message: result.message, type: 'error' });
      }
    } catch (error) {
      console.log("Fetch Error:", error);
      setStatus({ message: "Something went wrong! Please try again.", type: 'error' });
    }

    setTimeout(() => {
        setStatus({ message: '', type: '' });
    }, 6000);
  };

  return (
    <section id="contact" className={`${styles.contactSection} container`}>
      <h2 className="section-title">Let's Build Something Great</h2>
      <p className="section-subtitle">Have a project in mind or just want to say hello? Drop me a line.</p>
      <div className={styles.contactWrapper}>
        <div className={styles.formContainer}>
            <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className={styles.formGroup}>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name*" required />
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email*" required />
                </div>
                <div className={styles.formGroup}>
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Subject*" required />
                </div>
                <div className={styles.formGroup}>
                    <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message*" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
            {status.message && <div className={`${styles.formStatus} ${styles[status.type]}`}>{status.message}</div>}
        </div>

        <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
                <i className="bi bi-telephone-fill"></i>
                <div>
                    <h4>Phone</h4>
                    <p>+234-805-161-4609</p>
                </div>
            </div>
            <div className={styles.infoItem}>
                <i className="bi bi-envelope-fill"></i>
                <div>
                    <h4>Email</h4>
                    <p>Techdevtea@gmail.com</p>
                </div>
            </div>
            <div className={styles.infoItem}>
                <i className="bi bi-geo-alt-fill"></i>
                <div>
                    <h4>Location</h4>
                    <p>Ibadan, Nigeria</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;