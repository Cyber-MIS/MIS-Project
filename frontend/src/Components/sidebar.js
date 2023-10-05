// Sidebar.js

import React from 'react';
import { useState } from 'react';


function Sidebar( ) {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div style={isExpanded ? styles.expanded : styles.collapsed} className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <button className="btn btn-dark" onClick={() => setIsExpanded(!isExpanded)}>
                    <i className={`bi ${isExpanded ? 'bi-x' : 'bi-list'}`}></i>
                </button>
                <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5">{isExpanded && "Dashboard"}</span>
                </a>
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <a href="#" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> {isExpanded && <span className="ms-1">Home</span>}
                        </a>
                    </li>
                    
                    <li className="nav-item">
                        <a href="/childview" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-person"></i> {isExpanded && <span className="ms-1">Child Profiles</span>}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/fundview" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-cash-stack"></i> {isExpanded && <span className="ms-1">Funding Details</span>}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/inquiryview" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-chat-text"></i> {isExpanded && <span className="ms-1">Inquiry Details</span>}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/OrphanageView" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-building"></i> {isExpanded && <span className="ms-1">Orphanage Details</span>}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/UserView" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-person-circle"></i> {isExpanded && <span className="ms-1">User Details</span>}
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/WorkerView" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-person-badge"></i> {isExpanded && <span className="ms-1">Worker Details</span>}
                        </a>
                    </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

const styles = {
    collapsed: {
        width: '85px',
        position: 'fixed',      
        top: '0',              
        left: '0',              
        height: '100vh',        
        zIndex: 1000,           
    },
    expanded: {
        width: '250px',
        position: 'fixed',     
        top: '0',             
        left: '0',             
        height: '100vh',       
        zIndex: 1000,         
    },
};


export default Sidebar;
