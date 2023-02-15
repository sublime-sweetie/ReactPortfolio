import React from 'react';
import '../styles/Footer.css';

const styles = {
    footerStyle: {
      background: '#1A759F',
      justifyContent: 'flex-end',
    },
  };
  function Footer() {
    return (
      <div style={styles.footerStyle} className="footer">
        <div> Contact information:
        </div>
      </div>
    );
  }
  
  export default Footer;