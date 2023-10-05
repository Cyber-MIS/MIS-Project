import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import Header from '../Components/header';
import Footer from '../Components/footer';
import Sidebar from '../Components/sidebar';
import './PageStyling/HomePage.css';
import Navbar from '../Components/navbar';

export default function HomePage() {

    const navigate = useNavigate();

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column', // Stack children vertically
        justifyContent: 'center', // Center children vertically
        alignItems: 'center',     // Center children horizontally
        height: '70vh'           // Take full viewport height
    }
    
    const logoStyle = {
        marginBottom: '20px'      // Increase this value to increase the gap
    }
    
    

    return (
        <div className="HomePage">
            <Navbar />
            <div style={containerStyle}>

                <div className='navlinks'>
                    <Button className='button' type="primary" onClick={() => navigate('/login')}>Login</Button>
                    <Button className='button' type="primary" onClick={() => navigate('/register')}>Register</Button>
                    <Button className='button' type="primary" onClick={() => navigate('/donate')}>Donate</Button>
                </div>
            </div>
        <Footer />
        </div>

    );

}