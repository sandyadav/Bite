import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.contactInfo}>
          <p style={styles.footerTitle}>Contact Us</p>
          <p>Phone: 8588921448</p>
          <p>Email: kmrsandeep54@gmail.com</p>
        </div>
        
        <div style={styles.quickLinks}>
          <p style={styles.footerTitle}>Quick Links</p>
          <ul style={styles.linkList}>
            <li><a href="/">Home</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
            <li><a href="/">FAQs</a></li>
          </ul>
        </div>

        <div style={styles.socialMedia}>
          <p style={styles.footerTitle}>Follow Us</p>
          <ul style={styles.socialList}>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">Twitter</a></li>
          </ul>
        </div>

        <div style={styles.location}>
          <p style={styles.footerTitle}>Location</p>
          <p>Gurugram, Haryana, 122001, India</p>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>© 2025 Bite Bargain. All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    padding: '40px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif', // Consistent with header's font family
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: '20px',
  },
  contactInfo: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  quickLinks: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
  },
  socialMedia: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  socialList: {
    listStyle: 'none',
    padding: 0,
  },
  location: {
    flex: '1 1 200px',
    marginBottom: '20px',
  },
  footerBottom: {
    borderTop: '1px solid #444',
    paddingTop: '10px',
  },
  footerTitle: {
    fontWeight: 'bold',
    color: '#fad60d', // Matches the header button text color
    marginBottom: '10px',
  },
  link: {
    textDecoration: 'none',
    color: 'white',
    fontWeight: 'bold',
    padding: '8px 15px',
    borderRadius: '5px',
    background: 'linear-gradient(to bottom, #eeb807, #e6e6e6)',
    transition: 'background 0.3s ease, transform 0.2s ease',
  },
  linkHover: {
    background: 'linear-gradient(to bottom, #f30707, #d4d4d4)',
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 8px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2)',
  }
};

export default Footer;
