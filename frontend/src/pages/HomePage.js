import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import Logo from './Images/logo-no-background.png'
import './PageStyling/HomePage.css';

export default function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="HomePage">
            <div className='navbar'>
                <div className='logo'>
                    <img className='logo-image' src={Logo} alt='logo' />
                </div>
                <div className='navlinks'>
                    <Button className='button' type="primary" onClick={() => navigate('/login')}>Login</Button>
                    <Button className='button' type="primary" onClick={() => navigate('/register')}>Register</Button>
                </div>
            </div>
        </div>
    );

}