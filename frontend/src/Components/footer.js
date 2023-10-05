// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>© {new Date().getFullYear()} Batch 20 Cyber Peeps</p>
            <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a></p>
        </footer>
    );
}

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '20px 0',
    position: 'fixed',
    bottom: '0',
    width: '100%',
    borderTop: '1px solid #e7e7e7'
}

export default Footer;
