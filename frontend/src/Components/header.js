// Header.js

import React from 'react';


const Header = () => {
    return (
        <header style={headerStyle}>
            <div style={logoContainerStyle}>
            <img src="/Images/logo-no-background.png" alt="Logo" style={{...logoStyle, filter: 'invert(1)'}} />                
            <h1>Forever Family Home</h1>
            </div>
            <nav>
                <a href="/">Home</a> | <a href="/about">About</a> | <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative' // Added to position the logo absolutely within the header
}

const logoContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}

const logoStyle = {
    position: 'absolute', // Position the logo absolutely
    left: '10px',         // Push it to the left corner
    top: '50%',           // Center it vertically
    transform: 'translateY(-50%)', // Adjust for the logo's height
    height: '50px',       // Adjust based on your logo's size
    width: 'auto'
}

export default Header;
