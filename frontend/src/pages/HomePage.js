import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Sidebar from '../Components/sidebar';
import './PageStyling/HomePage.css';

export default function HomePage() {

    const navigate = useNavigate();

    const bgStyle = {
        backgroundImage: `url('/Images/homepage.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',     
        height: '70vh'           
    }
    
    const logoStyle = {
        marginBottom: '20px'      // Increase this value to increase the gap
    }

    const backgroundSquareStyle = {
        backgroundColor: '#f5f5f5',  // Example color, adjust as needed
        padding: '20px',            // Space around the buttons
        borderRadius: '10px'        // Rounded corners, optional
    };


    
    

    return (
        <div className="HomePage" style={bgStyle}>
            <Header />
            <div style={containerStyle}>
       
            <div className='navlinks' style={backgroundSquareStyle}>
                <Button className='button' type="primary" size="large" onClick={() => navigate('/login')}>Login</Button>
                <Button className='button' type="primary" size="large" onClick={() => navigate('/register')}>Register</Button>
                <Button className='button' type="primary" size="large" onClick={() => navigate('/donate')}>Donate</Button>
            </div>


            </div>
        <Footer />
        </div>

    );

}